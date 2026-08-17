"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { useCart } from "@/providers/CartProvider";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <main className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-24 overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center mt-8 mb-24 z-10 gap-16">
        <h1 className="font-serif text-[12vw] leading-[0.85] tracking-tight text-brand-charcoal z-0 opacity-90">
          BOTANICAL<br />BRILLIANCE
        </h1>

        <Link href="/shop" className="z-30 bg-brand-charcoal text-white px-8 py-4 rounded-full tracking-widest uppercase text-xs font-bold hover:bg-brand-coral shadow-xl transition-all duration-300 hover:scale-105 inline-block">
          Shop All Flavors
        </Link>
      </section>

      {/* Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-30">
        
        {/* Large Feature Card */}
        <Link href="/product/coral-crush" className="col-span-1 md:col-span-2 lg:col-span-2 bg-brand-coral rounded-[32px] p-10 flex flex-col justify-between text-white overflow-hidden relative min-h-[400px] hover:scale-[1.01] transform transition-all duration-500 hover:shadow-2xl cursor-pointer group/card block">
          <div className="z-10 relative">
            <span className="uppercase tracking-widest text-xs font-bold font-sans bg-white/20 px-3 py-1 rounded-full backdrop-blur-md group-hover/card:bg-white/30 transition-colors">Best Seller</span>
            <h2 className="font-serif text-5xl mt-6 leading-tight max-w-sm">Punchy Coral Peach</h2>
            <p className="mt-4 text-white/90 max-w-xs leading-relaxed">A perfectly balanced blend of wild peach, organic botanicals, and nootropics for pure focus.</p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-80 h-80 z-0 opacity-90 transform rotate-12 transition-transform duration-700 group-hover/card:rotate-6 group-hover/card:scale-110">
            <Image
              src="/assets/hero-can.png"
              alt="Coral Can"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Small Flavor Card 1 */}
        <div className="col-span-1 bg-brand-cocoa rounded-[32px] p-8 flex flex-col items-center justify-between text-white relative min-h-[400px] overflow-hidden group">
          <h3 className="font-serif text-3xl z-10 text-center cursor-pointer hover:opacity-80"><Link href="/product/rich-cacao">Rich Cacao</Link></h3>
          <Link href="/product/rich-cacao" className="relative w-40 h-56 transition-transform duration-500 group-hover:scale-110 z-10 mt-6 cursor-pointer block">
            <Image src="/assets/flavor-can.png" alt="Cocoa Can" fill className="object-contain" />
          </Link>
          <button onClick={() => addToCart({ id: 'rich-cacao', name: 'Rich Cacao', price: 48, quantity: 1, image: '/assets/flavor-can.png' })} className="mt-6 w-full py-3 bg-white/20 backdrop-blur rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-brand-cocoa transition-colors">Add to Cart</button>
        </div>

        {/* Small Flavor Card 2 */}
        <div className="col-span-1 bg-brand-green rounded-[32px] p-8 flex flex-col items-center justify-between text-white relative min-h-[400px] overflow-hidden group">
          <h3 className="font-serif text-3xl z-10 text-center cursor-pointer hover:opacity-80"><Link href="/product/matcha-yuzu">Matcha Yuzu</Link></h3>
          <Link href="/product/matcha-yuzu" className="relative w-40 h-56 transition-transform duration-500 group-hover:scale-110 z-10 mt-6 cursor-pointer block">
            <Image src="/assets/green-can.png" alt="Matcha Green Can" fill className="object-contain" />
          </Link>
          <button onClick={() => addToCart({ id: 'matcha-yuzu', name: 'Matcha Yuzu', price: 48, quantity: 1, image: '/assets/green-can.png' })} className="mt-6 w-full py-3 bg-white/20 backdrop-blur rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-brand-green transition-colors">Add to Cart</button>
        </div>

        {/* Small Flavor Card 3 */}
        <div className="col-span-1 bg-brand-lavender rounded-[32px] p-8 flex flex-col items-center justify-between text-white relative min-h-[400px] overflow-hidden group">
          <h3 className="font-serif text-3xl z-10 text-center cursor-pointer hover:opacity-80"><Link href="/product/lemon-lavender">Lemon Lavender</Link></h3>
          <Link href="/product/lemon-lavender" className="relative w-40 h-56 transition-transform duration-500 group-hover:scale-110 z-10 mt-6 cursor-pointer block">
            <Image src="/assets/lemon_lavender_can.png" alt="Lemon Lavender Can" fill className="object-contain" />
          </Link>
          <button onClick={() => addToCart({ id: 'lemon-lavender', name: 'Lemon Lavender', price: 48, quantity: 1, image: '/assets/lemon_lavender_can.png' })} className="mt-6 w-full py-3 bg-white/20 backdrop-blur rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-brand-lavender transition-colors">Add to Cart</button>
        </div>

        {/* Small Flavor Card 4 */}
        <div className="col-span-1 bg-brand-magenta rounded-[32px] p-8 flex flex-col items-center justify-between text-white relative min-h-[400px] overflow-hidden group">
          <h3 className="font-serif text-3xl z-10 text-center cursor-pointer hover:opacity-80"><Link href="/product/berry-mint">Berry Mint</Link></h3>
          <Link href="/product/berry-mint" className="relative w-40 h-56 transition-transform duration-500 group-hover:scale-110 z-10 mt-6 cursor-pointer block">
            <Image src="/assets/berry_mint_can.png" alt="Berry Mint Can" fill className="object-contain" />
          </Link>
          <button onClick={() => addToCart({ id: 'berry-mint', name: 'Berry Mint', price: 48, quantity: 1, image: '/assets/berry_mint_can.png' })} className="mt-6 w-full py-3 bg-white/20 backdrop-blur rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-brand-magenta transition-colors">Add to Cart</button>
        </div>

        {/* Small Flavor Card 5 */}
        <div className="col-span-1 bg-brand-vanilla rounded-[32px] p-8 flex flex-col items-center justify-between text-brand-charcoal relative min-h-[400px] overflow-hidden group border border-black/5">
          <h3 className="font-serif text-3xl z-10 text-center cursor-pointer hover:opacity-80"><Link href="/product/vanilla-oat">Vanilla Oat</Link></h3>
          <Link href="/product/vanilla-oat" className="relative w-40 h-56 transition-transform duration-500 group-hover:scale-110 z-10 mt-6 cursor-pointer block">
            <Image src="/assets/vanilla_oat_can.png" alt="Vanilla Oat Can" fill className="object-contain" />
          </Link>
          <button onClick={() => addToCart({ id: 'vanilla-oat', name: 'Vanilla Oat', price: 48, quantity: 1, image: '/assets/vanilla_oat_can.png' })} className="mt-6 w-full py-3 bg-brand-charcoal/5 backdrop-blur rounded-full text-sm font-bold tracking-widest uppercase hover:bg-brand-charcoal hover:text-white transition-colors">Add to Cart</button>
        </div>

        {/* Informational Bento Card */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-[32px] p-10 flex flex-col justify-center border border-black/5 min-h-[300px]">
          <h3 className="font-serif text-5xl text-brand-charcoal mb-6">Your gut knows,<br/>so does science.</h3>
          <div className="flex flex-wrap gap-3 mt-4">
            {["High Protein", "Prebiotic Fiber", "Non-GMO", "Zero Added Sugar", "Gluten Free", "Gut Friendly"].map(pill => (
              <span key={pill} className="bg-brand-cream text-brand-charcoal border border-black/10 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Lifestyle / Feature Card */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2 rounded-[32px] overflow-hidden relative min-h-[300px] group">
          <Image src="/assets/lifestyle-shot.png" alt="Lifestyle" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
          <h3 className="absolute bottom-8 left-8 right-8 font-serif text-4xl text-white drop-shadow-lg">Daily movement starts from within.</h3>
        </div>

      </section>
    </main>
  );
}
