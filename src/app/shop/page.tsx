"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { products } from "@/data/products";
import { useCart } from "@/providers/CartProvider";

export default function Shop() {
  const { addToCart } = useCart();
  const allProducts = Object.values(products);

  return (
    <main className="min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-coral selection:text-white">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <header className="text-center mb-24 animate-[fadeInUp_1s_ease-out_forwards]">
          <h1 className="font-serif text-[12vw] md:text-8xl leading-none tracking-tight mb-6">ALL FLAVORS</h1>
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] font-bold opacity-60">
            Botanical functional beverages for every mood.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProducts.map((product, idx) => (
            <div 
              key={product.id} 
              className="bg-white rounded-[32px] p-8 flex flex-col items-center justify-between relative min-h-[500px] overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-500 animate-[fadeInUp_1s_ease-out_forwards]"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-center z-10">
                <h3 className="font-serif text-3xl mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                  <Link href={`/product/${product.slug}`}>{product.name}</Link>
                </h3>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold opacity-40 mb-6">{product.subtitle}</p>
              </div>

              <Link href={`/product/${product.slug}`} className="relative w-48 h-64 transition-transform duration-500 group-hover:scale-110 z-10 cursor-pointer block">
                <Image src={product.images.hero} alt={product.name} fill className="object-contain" />
              </Link>
              
              <div className="w-full mt-8 z-10">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-sans text-xs opacity-60">Case of 12</span>
                  <span className="font-serif text-lg">${product.price}.00</span>
                </div>
                <button 
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.images.hero })}
                  className="w-full py-4 bg-brand-charcoal text-white rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-brand-coral transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
