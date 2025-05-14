import { getAllBrands, getCategories } from "@/sanity/queries";
import React from "react";
import Shop from "@/components/Shop/shop";

export default async function ShopPage() {
  const categories = await getCategories();
  const brands = await getAllBrands();
  return (
    <div className="bg-none">
      <Shop categories={categories} brands={brands} />
    </div>
  );
};

