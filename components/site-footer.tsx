import Logo from "./logo";
import { SubText, SubTitle } from "./ui/text";
import Link from "next/link";
import { quickLinksData } from "../config/data";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SocialMedia from "./SocialMedia";

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container px-2 md:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Discover curated furniture collections at Shopcartyt, blending
              style and comfort to elevate your living spaces.
            </SubText>
            <SocialMedia
              iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <SubTitle className="text-slate-800 dark:text-slate-300 md:border-0 sm:border-b sm:border-slate-500 sm:border-dashed py-2">
              Quick Links
            </SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-3 mt-4">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle className="text-slate-800 dark:text-slate-300 md:border-0 sm:border-b sm:border-slate-500 sm:border-dashed py-2">
              Newsletter
            </SubTitle>
            <SubText>
              Subscribe to our newsletter to receive updates and exclusive
              offers
            </SubText>
            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} <Logo className="text-sm" />. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
