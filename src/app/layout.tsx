import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AURA | Functional Botanical Beverage",
  description: "Premium functional sparkling water and Botanical Beverages.",
};

import { CartProvider } from "@/providers/CartProvider";
import { CartDrawer } from "@/components/CartDrawer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased selection:bg-brand-coral selection:text-white`}>
      <body className="font-sans min-h-screen flex flex-col pt-8 sm:pt-16 pb-24">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
