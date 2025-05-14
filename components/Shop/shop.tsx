"use client";
import { BRANDS_QUERYResult, Category, Product } from "@/sanity.types";
import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import { Title } from "../ui/text";
import CategoryList from "./CategoryList";
import BrandList from "./BrandList";
import PriceList from "./PriceList";
import ProductCard from "../ProductCard";
import NoProductAvailable from "../NoProductAvailable";

interface Props {
  categories: Category[];
  brands: BRANDS_QUERYResult;
}
export default function Shop({ categories, brands }: Props) {
  const searchParams = useSearchParams();
  const brandParams = searchParams?.get("brand");
  const categoryParams = searchParams?.get("category");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryParams || null
  );
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    brandParams || null
  );
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  /*
    useCallback giúp tạo ra một hàm fetchProducts chỉ thay đổi khi một trong các dependency
      (selectedCategory, selectedBrand, selectedPrice) thay đổi.
      Điều này giúp tối ưu hiệu năng, tránh tạo lại hàm không cần thiết.
 */
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      // Nếu người dùng chọn khoảng giá (selectedPrice),
      // đoạn mã sẽ tách giá trị min và max từ chuỗi (ví dụ: "100-500") thành số.
      let minPrice = 0;
      let maxPrice = 10000;
      if (selectedPrice) {
        const [min, max] = selectedPrice.split("-").map(Number);
        minPrice = min;
        maxPrice = max;
      }

      /* Đây là một query (có thể là GROQ của Sanity) để lấy sản phẩm:
        Theo loại (_type == 'product')
        Theo danh mục, thương hiệu nếu có chọn
        Theo khoảng giá
        Sắp xếp theo tên
        Lấy thêm thông tin tên danh mục của sản phẩm
      */
      const query = `
      *[_type == 'product' 
        && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory]._id))
        && (!defined($selectedBrand) || references(*[_type == "brand" && slug.current == $selectedBrand]._id))
        && price >= $minPrice && price <= $maxPrice
      ] 
      | order(name asc) {
        ...,"categories": categories[]->title
      }
    `;

      /*
        Gửi query lên server, truyền các biến lọc vào.
        Kết quả trả về sẽ được lưu vào state products.
      */
      const data = await client.fetch(
        query,
        { selectedCategory, selectedBrand, minPrice, maxPrice },
        { next: { revalidate: 0 } }
      );

      /*
        Khi bắt đầu fetch, đặt loading là true.
        Nếu có lỗi, log ra console.
        Sau khi xong (dù thành công hay lỗi), đặt loading về false.
      */
      setProducts(data);
    } catch (error) {
      console.log("Shop product fetching Error", error);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, selectedBrand, selectedPrice]);

  /*
    Khi một trong các filter thay đổi, hàm fetchProducts sẽ được gọi lại để lấy dữ liệu mới.
  */
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="border-t">
      <div className="container mt-5">
        <div className="sticky top-0 z-10 mb-5">
          <div className="flex items-center justify-between">
            <Title className="text-lg uppercase tracking-wide">
              Get the products as your needs
            </Title>
            {(selectedCategory !== null ||
              selectedBrand !== null ||
              selectedPrice !== null) && (
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedBrand(null);
                  setSelectedPrice(null);
                }}
                className="text-shop_dark_green underline text-sm mt-2 font-medium hover:text-darkRed hoverEffect"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 border-t border-t-shop_dark_green/50">
          <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 md:border-r border-r-shop_btn_dark_green/50 scrollbar-hide">
            <CategoryList
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <BrandList
              brands={brands}
              setSelectedBrand={setSelectedBrand}
              selectedBrand={selectedBrand}
            />
            <PriceList
              setSelectedPrice={setSelectedPrice}
              selectedPrice={selectedPrice}
            />
          </div>
          <div className="flex-1 pt-5">
            <div className="h-[calc(100vh-160px)] overflow-y-auto pr-2 scrollbar-hide">
              {loading ? (
                <div className="p-20 flex flex-col gap-2 items-center justify-center bg-none">
                  <Loader2 className="w-10 h-10 text-shop_dark_green animate-spin" />
                  <p className="font-semibold tracking-wide text-base">
                    Product is loading . . .
                  </p>
                </div>
              ) : products?.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {products?.map((product) => (
                    <ProductCard key={product?._id} product={product} />
                  ))}
                </div>
              ) : (
                <NoProductAvailable className="bg-none mt-0" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
