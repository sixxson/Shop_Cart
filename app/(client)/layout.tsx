import type { Metadata } from "next";
import { ThemeProvider } from "@/Theme/Theme-provider";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    template: "%s - Shopcart online store",
    default: "Shopcart online store",
  },
  description: "Shopcart online store, Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  );
}
