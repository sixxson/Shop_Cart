import HomeBanner from "@/components/Home/home-banner";
import ProductGrid from "@/components/Home/product-grip";
import HomeCategories from "@/components/Home/home-categories";
import ShopByBrands from "@/components/Home/ShopByBrands";
import LatestBlog from "@/components/Home/LatestBlog";
import { getCategories } from "@/sanity/queries";

export default async function Home() {
  const categories = await getCategories(6);

  return (
    <div className="container px-2 md:px-8 bg-shop-light-pink ">
      <HomeBanner />
      <ProductGrid />
      <HomeCategories categories={categories} />
      <ShopByBrands />
      <LatestBlog />
    </div>
  );
}
