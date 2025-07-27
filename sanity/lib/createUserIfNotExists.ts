import { client } from "./client";
import { v4 as uuidv4 } from "uuid";

export async function createUserIfNotExists(user: {
  clerkId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
}) {
  const existingUser = await client.fetch(
    `*[_type == "user" && clerkId == $clerkId][0]`,
    { clerkId: user.clerkId }
  );

  if (existingUser) {
    return existingUser;
  }
  const fullName = [user.firstName, user.lastName]
    .filter(Boolean)
    .join(" ")
    .trim();

  const newUser = {
    _type: "user",
    _id: `user-${uuidv4()}`,
    clerkId: user.clerkId,
    email: user.email,
    fullName: fullName || "",
    avatar: user.avatar || "", 
    createdAt: new Date().toISOString(),
    role: "user",
  };

  await client.create(newUser);
  return newUser;
}
