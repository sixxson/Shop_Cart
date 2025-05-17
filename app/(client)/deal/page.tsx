import React from "react";
import { Title } from "@/components/ui/text";
import ProductCard from "@/components/ProductCard";
import { getDealProducts } from "@/sanity/queries";

export default async function DealPage() {
  const products = await getDealProducts();
  return (
    <div className="container py-10 bg-deal-bg dark:bg-[#202122] ">
      <Title className="mb-5 underline underline-offset-4 decoration-[1px] text-base uppercase tracking-wide">
        Hot Deals of the Week
      </Title>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {products?.map((product) => {
          // Fix categories type
          const fixedProduct = {
            ...product,
            categories: Array.isArray(product.categories)
              ? product.categories
                  .filter((cat): cat is string => typeof cat === "string")
                  .map((cat, idx) => ({
                    _ref: cat,
                    _type: "reference" as const,
                    _key: String(idx),
                  }))
              : undefined,
          };
          return <ProductCard key={product?._id} product={fixedProduct} />;
        })}
      </div>
    </div>
  );
}
