"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lenis from "lenis";
import { useCart } from "@/providers/CartProvider";

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  notes: string;
  vibe: string;
  function: string;
  images: {
    hero: string;
    macro: string;
    ingredient: string;
    lifestyle: string;
  };
}

export default function PDPClient({ product }: { product: Product | undefined }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, 
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream text-brand-charcoal">
        <div className="text-center">
          <h1 className="font-serif text-5xl mb-4">Product Not Found.</h1>
          <Link href="/" className="font-sans text-sm uppercase tracking-widest hover:text-brand-coral transition-colors">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-brand-cream text-brand-charcoal relative selection:bg-brand-coral selection:text-white">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Side: Media Column (60%) */}
        <section className="w-full lg:w-[60%] lg:border-r border-black/5">
          <div className="flex flex-col w-full h-[300vh] relative">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0">
                <Image 
                  src={product.images.hero} 
                  alt={`${product.name} Hero`} 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden mix-blend-normal z-10 transition-opacity">
              <div className="absolute inset-0">
                <Image 
                  src={product.images.macro} 
                  alt="Texture Macro" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden mix-blend-normal z-20">
              <div className="absolute inset-0">
                <Image 
                  src={product.images.ingredient} 
                  alt="Ingredients" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden mix-blend-normal z-30">
              <div className="absolute inset-0">
                <Image 
                  src={product.images.lifestyle} 
                  alt="Lifestyle" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Static Info Column (40%) */}
        <section className="w-full lg:w-[40%] bg-brand-cream p-10 lg:p-[80px] lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto z-40">
          <nav className="mb-12">
            <div className="uppercase tracking-widest text-[10px] opacity-40 font-sans">
              <Link href="/" className="hover:opacity-100 transition-opacity">Home</Link> / 
              <span className="ml-1">Products</span> / 
              <span className="ml-1 font-bold">{product.name}</span>
            </div>
          </nav>

          <header className="mb-12 opacity-0 translate-y-4 animate-[fadeInUp_1s_ease-out_forwards]">
            <h1 className="font-serif text-[64px] leading-[0.9] tracking-tight mb-4 text-brand-charcoal">{product.name}</h1>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold opacity-80 mb-6 text-brand-charcoal">
              {product.subtitle}
            </p>
            <p className="text-[#888888] text-[14px]">
              ${product.price}.00 / Case of 12
            </p>
          </header>

          <div className="border-t border-b border-black/10 py-8 mb-12 opacity-0 translate-y-4 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div className="group cursor-default">
                <span className="text-[20px] mb-2 block transition-all group-hover:scale-110">🌸</span>
                <h4 className="font-sans text-[10px] uppercase font-bold tracking-widest opacity-50 mb-1">Notes</h4>
                <p className="font-serif text-[18px]">{product.notes}</p>
              </div>
              <div className="group cursor-default">
                <span className="text-[20px] mb-2 block transition-all group-hover:scale-110">✨</span>
                <h4 className="font-sans text-[10px] uppercase font-bold tracking-widest opacity-50 mb-1">Vibe</h4>
                <p className="font-serif text-[18px]">{product.vibe}</p>
              </div>
              <div className="group cursor-default col-span-2">
                <span className="text-[20px] mb-2 block transition-all group-hover:scale-110">⚡</span>
                <h4 className="font-sans text-[10px] uppercase font-bold tracking-widest opacity-50 mb-1">Function</h4>
                <p className="font-serif text-[18px]">{product.function}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 opacity-0 translate-y-4 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
            <div className="flex items-center justify-between border-b border-black/20 pb-4">
              <span className="font-sans text-[11px] uppercase tracking-widest font-bold">Quantity</span>
              <div className="flex items-center gap-6">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="opacity-50 hover:opacity-100 text-xl transition-opacity">−</button>
                <span className="font-serif text-xl w-4 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="opacity-50 hover:opacity-100 text-xl transition-opacity">+</button>
              </div>
            </div>
            
            <button 
              onClick={() => addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity,
                image: product.images.hero
              })}
              className="w-full bg-black text-white rounded-full py-5 text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-black/80 hover:scale-[1.02] shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              ADD TO COLLECTION
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
