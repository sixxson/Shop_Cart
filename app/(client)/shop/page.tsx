import { getAllBrands, getCategories } from "@/sanity/queries";
import React from "react";
import Shop from "@/components/Shop/shop";

const ShopPage = async () => {
  const categories = await getCategories();
  const brands = await getAllBrands();
  return (
    <div className="bg-white">
      <Shop categories={categories} brands={brands} />
    </div>
  );
};

export default ShopPage;
