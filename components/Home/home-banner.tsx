'use client';

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Title } from "../ui/text";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeftIcon, ArrowRightIcon,Loader2 } from "lucide-react";
import { motion } from "framer-motion";

type Banner = {
  _id: string;
  title: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

export default function HomeBanner() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await client.fetch(`*[_type == "banner"]`);
        setBanners(data);
      } catch (error) {
        console.error("Banner fetching error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    if (banners.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [banners, currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === banners.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  if (loading) return <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
    <motion.div className="flex items-center space-x-2 text-blue-600">
      <Loader2 className="w-5 h-5 animate-spin" />
      <span>Banner is loading...</span>
    </motion.div>
  </div>;

  return (
    <section className="space-y-10">
      <div className="relative w-full h-[300px] md:h-[480px] rounded-xl overflow-hidden bg-gray-100 shadow">

        {banners.map((banner, index) => (
          <Image
            key={banner._id}
            src={urlFor(banner).url()}
            alt="Banner"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            width={480}
            height={300}
          />
        ))}

        {/* Buttons */}
        <Button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 px-3 py-1 rounded shadow"
        >
          <ArrowLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 px-3 py-1 rounded shadow"
        >
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>
      <div className="py-16 md:py-0 bg-shop_light_pink dark:bg-[#b4aba2] rounded-lg px-10 lg:px-24 flex items-center justify-between">
        <div className="space-y-5">
          <Title>
            Grab Upto 50% off on <br />
            Selected headphone
          </Title>
          <Link
            href="/shop"
            className="bg-shop_dark_green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_dark_green hoverEffect"
          >
            Buy Now
          </Link>
        </div>
        <div>
          <Image
            src="/images/banner/banner_1.png"
            alt="banner_1"
            className="hidden md:inline-flex w-96"
            width={1920}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
