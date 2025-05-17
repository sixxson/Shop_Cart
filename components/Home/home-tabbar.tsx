"use client";
import Link from "next/link";
import { productType } from "@/config/data";
interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

/**
 * HomeTabbar component renders a tab bar for selecting product types and a link to view all products.
 *
 * @param {Props} props - The props for the HomeTabbar component.
 * @param {string} props.selectedTab - The currently selected tab.
 * @param {(tab: string) => void} props.onTabSelect - Callback function invoked when a tab is selected.
 *
 * @returns {JSX.Element} The rendered HomeTabbar component.
 */

export default function HomeTabbar({ selectedTab, onTabSelect }: Props) {
  return (
    <div className="flex items-center flex-wrap gap-5 justify-between">
      <div className="flex items-center gap-1.5 text-sm font-semibold">
        <div className="flex items-center gap-1.5 md:gap-3">
          {productType?.map((item) => (
            <button
              onClick={() => onTabSelect(item?.title)}
              key={item?.title}
              className={`border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect ${selectedTab === item?.title ? "bg-shop_light_green text-white border-shop_light_green" : "bg-shop_light_green/10"}`}
            >
              {item?.title}
            </button>
          ))}
        </div>
      </div>
      <Link
        href={"/shop"}
        className="border border-darkColor px-4 py-1 rounded-full hover:bg-shop_light_green hover:text-white hover:border-shop_light_green hoverEffect"
      >
        See all
      </Link>
    </div>
  );
}
