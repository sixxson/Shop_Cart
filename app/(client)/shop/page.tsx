import { getAllBrands, getCategories } from "@/sanity/queries";
import React, { Suspense } from "react";
import Shop from "@/components/Shop/shop";

export default async function ShopPage() {
  const categories = await getCategories();
  const brands = await getAllBrands();

  return (
    <div className="bg-none">
      <Suspense fallback={<div>Loading shop...</div>}>
        <Shop categories={categories} brands={brands} />
      </Suspense>
    </div>
  );
}


