import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { CommandMenu } from "./command-menu";
import { ModeSwitcher } from "./mode-switcher";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./SignIn";
import { ClerkLoaded } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { getMyOrders } from "../sanity/queries";
import UserMenu from "./user-menu";

export default async function SiteHeader() {
  const user = await currentUser();
  const { userId } = await auth();
  let orders = null;
  if (userId) {
    orders = await getMyOrders(userId);
  }

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
                  <UserMenu
                    orders={
                      Array.isArray(orders)
                        ? orders.map((order) => ({
                            ...order,
                            products: Array.isArray(order.products)
                              ? order.products
                              : [],
                          }))
                        : []
                    }
                  />
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

