import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import NoAccess from "@/components/NoAccess";
import WishListProducts from "@/components/WishList/WishListProducts";

const WishListPage = async () => {
  const user = await currentUser();
  return (
    <>
      {user ? (
        <WishListProducts />
      ) : (
        <NoAccess details="Log in to view your wishlist items. Don’t miss out on your cart products to make the payment!" />
      )}
    </>
  );
};

export default WishListPage;
