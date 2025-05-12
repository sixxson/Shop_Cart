import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Title } from "../ui/text";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-shop_light_pink dark:bg-[#b4aba2] rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title>
          Grab Upto 50% off on <br />
          Selected headphone
        </Title>
        <Link
          href={"/shop"}
          className="bg-shop_dark_green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_dark_green hoverEffect"
        >
          Buy Now
        </Link>
      </div>
      <div>
        <Image
          src='/images/banner/banner_1.png'
          alt="banner_1"
          className="hidden md:inline-flex w-96"
          width={1920}
          height={300}
        />
      </div>
    </div>
  );
};

export default HomeBanner;
