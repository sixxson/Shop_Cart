"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import { Product } from "@/sanity.types";
import { productType } from "../../config/data";
import NoProductAvailable from "../NoProductAvailable";
import ProductCard from "../ProductCard";
import HomeTabbar from "./home-tabbar";

/**
 * Renders a grid of products based on the selected product type tab.
 *
 * Fetches products from a backend using a GROQ query filtered by the selected variant.
 * Displays a loading indicator while fetching, a grid of product cards when products are available,
 * or a fallback component when no products are found.
 *
 * @component
 * @returns {JSX.Element} The rendered product grid with tab selection, loading state, and product cards.
 *
 * @example
 * ```tsx
 * <ProductGrid />
 * ```
 */

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
  const query = `*[_type == "product" && variant == $variant] | order(name asc){
  ...,"categories": categories[]->title
}`;

  useEffect(() => {
    const params = { variant: selectedTab.toLowerCase() };
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(await response);
      } catch (error) {
        console.error("Product fetching Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTab, query]);

  return (
    <div className="container flex flex-col lg:px-0 my-10">
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
          <motion.div className="flex items-center space-x-2 text-blue-600">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Product is loading...</span>
          </motion.div>
        </div>
      ) : products?.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
          <>
            {products?.map((product) => (
              <AnimatePresence key={product?._id}>
                <motion.div
                  layout
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductCard key={product?._id} product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </>
        </div>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </div>
  );
}
