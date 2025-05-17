import { getCategories } from "@/sanity/queries";
import React from "react";
import { Title } from "../../../../components/ui/text";
import CategoryProducts from "../../../../components/Category/CategoryProducts";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const categories = await getCategories();
  const { slug } = await params;
  return (
    <div className="container px-4 md:px-8 lg:px-16 py-10">
        <Title>
          Products by Category:{" "}
          <span className="font-bold text-green-600 capitalize tracking-wide">
            {slug && slug}
          </span>
        </Title>
        <CategoryProducts categories={categories} slug={slug} />
    </div>
  );
};

export default CategoryPage;
