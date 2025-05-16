"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { ShoppingBag } from "lucide-react";

// Định nghĩa Order type đơn giản cho phù hợp
interface Order {
  products?: { quantity?: number }[] | null;
}

export default function UserMenu({ orders }: { orders: Order[] }) {
  // Tính tổng số lượng sản phẩm đã mua
  const totalProducts =
    orders?.reduce(
      (sum, order) =>
        sum +
        (Array.isArray(order.products)
          ? order.products.reduce((s, p) => s + (p.quantity || 0), 0)
          : 0),
      0
    ) || 0; 
  return (
    <SignedIn>
      <div className="relative">
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Link
              label="Orders"
              labelIcon={<ShoppingBag size={16} className="font-semibold" />}
              href="/orders"
            />
          </UserButton.MenuItems>
        </UserButton>
        <span className="absolute -top-1 -right-1 bg-shop_btn_dark_green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
          {totalProducts}
        </span>
      </div>
    </SignedIn>
  );
}
