import React from "react";
import Link from "next/link";
import { getAllBrands } from "@/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { GitCompareArrows, Headset, ShieldCheck, Truck } from "lucide-react";
import { Title } from "../ui/text";

const extraData = [
  {
    title: "Free Delivery",
    description: "Free shipping over $100",
    icon: <Truck size={45} />,
  },
  {
    title: "Free Return",
    description: "Free shipping over $100",
    icon: <GitCompareArrows size={45} />,
  },
  {
    title: "Customer Support",
    description: "Friendly 27/7 customer support",
    icon: <Headset size={45} />,
  },
  {
    title: "Money Back guarantee",
    description: "Quality checked by our team",
    icon: <ShieldCheck size={45} />,
  },
];

/**
 * Asynchronous React component that displays a section for shopping by brands.
 *
 * Fetches all available brands using `getAllBrands()` and renders them as clickable links,
 * each displaying the brand's image. Also displays additional information or features
 * from `extraData` in a grid layout below the brands.
 *
 * @returns {Promise<JSX.Element>} A promise that resolves to the rendered ShopByBrands component.
 *
 * @remarks
 * - Uses Tailwind CSS classes for styling and responsive design.
 * - Expects `getAllBrands`, `urlFor`, `Title`, `Link`, `Image`, and `extraData` to be available in scope.
 * - Each brand is linked to the shop page with a query parameter for filtering by brand.
 */

export default async function ShopByBrands () {
  const brands = await getAllBrands();
  return (
    <div className="mb-10 lg:mb-20 bg-none p-5 lg:p-7 rounded-md">
      <div className="flex items-center gap-5 justify-between mb-10">
        <Title>Shop By Brands</Title>
        <Link
          href={"/shop"}
          className="text-sm font-semibold tracking-wide hover:text-shop_btn_dark_green hoverEffect"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2.5">
        {brands?.map((brand) => (
          <Link
            key={brand?._id}
            href={{ pathname: "/shop", query: { brand: brand?.slug?.current } }}
            className="bg-none w-34 h-24 flex items-center justify-center rounded-md overflow-hidden hover:shadow-lg shadow-shop_dark_green/20 hoverEffect"
          >
              {brand?.image && (
                <Image
                  src={urlFor(brand?.image).url()}
                  alt="brandImage"
                  width={500}
                  height={250}
                  className={"w-full h-full object-contain"}
                />
            )}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 p-2 shadow-sm hover:shadow-shop_light_green/20 py-5">
        {extraData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 group text-lightColor hover:text-shop_light_green"
          >
            <span className="inline-flex scale-100 group-hover:scale-90 hoverEffect">
              {item?.icon}
            </span>
            <div className="text-sm">
              <p className="text-darkColor/80 font-bold capitalize">
                {item?.title}
              </p>
              <p className="text-lightColor">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
