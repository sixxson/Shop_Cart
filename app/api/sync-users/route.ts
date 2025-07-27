import { NextResponse } from "next/server";
import { createUserIfNotExists } from "@/sanity/lib/createUserIfNotExists";

export async function GET() {
  try {
    const res = await fetch("https://api.clerk.com/v1/users", {
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      },
      cache: "no-store",
    });

    const users = await res.json();

    for (const user of users) {
      await createUserIfNotExists({
        clerkId: user.id,
        email: user.email_addresses?.[0]?.email_address || "",
        firstName: user.first_name,
        lastName: user.last_name,
        avatar: user.imageUrl,
      });
    }

    return NextResponse.json({ success: true, total: users.length });
  } catch (error) {
    console.error("Sync Clerk users failed:", error);
    return NextResponse.json(
      { error: "Failed to sync users" },
      { status: 500 }
    );
  }
}
