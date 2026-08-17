"use client";

import Link from "next/link";
import { useCart } from "@/providers/CartProvider";

export function Navigation() {
  const { openDrawer, cartCount } = useCart();

  return (
    <nav className="h-[120px] flex flex-row items-center justify-between font-sans text-sm tracking-widest uppercase font-semibold max-w-7xl mx-auto px-6 w-full z-50 relative">
      <div className="flex gap-8">
        <Link href="/shop" className="hover:text-brand-coral transition-colors">Shop</Link>
        <Link href="/about" className="hover:text-brand-coral transition-colors">Our Story</Link>
      </div>
      <div className="font-serif text-3xl normal-case tracking-normal">
        <Link href="/">Aura.</Link>
      </div>
      <div className="flex gap-8">
        <button onClick={openDrawer} className="hover:text-brand-coral transition-colors">
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
}
