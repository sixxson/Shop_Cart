"use client";

import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { CommandMenu } from "./command-menu";
import { ModeSwitcher } from "./mode-switcher";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./SignIn";
import { ClerkLoaded, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SiteHeader() {
  const { user } = useUser();
  const router = useRouter();

  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-1 md:gap-4 px-1.5 md:px-8 ">
          <MainNav />
          <MobileNav />
          <div className="md:flex-1 ml-auto flex items-center gap-1 md:justify-end">
            <div className=" w-full flex-1 md:flex md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <nav className="flex items-center md:px-2 gap-3">
              <CartIcon />
              <FavoriteButton />
              <ClerkLoaded>
                {user ? (
                  <SignedIn>
                    <UserButton>
                      <UserButton.MenuItems>
                        <UserButton.Action
                          label="Orders"
                          labelIcon={<ShoppingBag />}
                          onClick={() => router.push("/orders")}
                        />
                      </UserButton.MenuItems>
                    </UserButton>
                  </SignedIn>
                ) : (
                  <SignIn />
                )}
              </ClerkLoaded>
              <ModeSwitcher />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
