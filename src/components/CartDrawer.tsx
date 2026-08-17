"use client";

import Image from "next/image";
import { useCart } from "@/providers/CartProvider";

export function CartDrawer() {
  const { isDrawerOpen, closeDrawer, cartItems, cartTotal, updateQuantity } = useCart();

  return (
    <div 
      className={`fixed inset-0 z-[100] flex justify-end transition-opacity duration-500 pointer-events-none ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}
    >
      <div 
        className="absolute inset-0 bg-white/20 backdrop-blur-md transition-opacity duration-300" 
        onClick={closeDrawer} 
      />
      <div 
        className={`relative w-full max-w-[440px] h-full bg-brand-cream border-l border-black/5 shadow-2xl p-10 flex flex-col transform transition-transform duration-500 cubic-bezier(.19,1,.22,1) ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-serif text-3xl text-brand-charcoal">Your Collection</h2>
          <button 
            onClick={closeDrawer} 
            className="text-3xl font-light opacity-50 hover:opacity-100 hover:rotate-90 transition-all duration-300"
          >
            ×
          </button>
        </div>
        
        <div className="flex-grow flex flex-col gap-6 overflow-y-auto pr-2">
          {cartItems.length === 0 ? (
            <p className="text-center opacity-50 mt-10 font-sans tracking-widest text-sm uppercase">Your bag is empty.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex gap-6 items-center bg-white rounded-2xl p-4 shadow-sm">
                <div className="w-24 h-32 relative bg-brand-cream/50 rounded-xl shrink-0 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-serif text-2xl mb-1 text-brand-charcoal">{item.name}</h3>
                  <p className="text-[12px] opacity-60 mb-4 font-sans uppercase tracking-wider">Case of 12</p>
                  <div className="flex justify-between items-end">
                    <p className="font-sans font-bold text-sm text-brand-charcoal">${item.price * item.quantity}.00</p>
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="opacity-50 hover:opacity-100 px-2 py-1 bg-black/5 rounded">−</button>
                      <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="opacity-50 hover:opacity-100 px-2 py-1 bg-black/5 rounded">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="border-t border-black/10 pt-8 mt-4 shrink-0">
          <div className="flex justify-between mb-8">
            <span className="font-serif text-xl">Subtotal</span>
            <span className="font-serif text-xl">${cartTotal}.00</span>
          </div>
          <button 
            disabled={cartItems.length === 0}
            className="w-full bg-black text-white rounded-full py-5 text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-brand-coral hover:scale-[1.02] shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:hover:bg-black disabled:hover:scale-100"
          >
            SECURE CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
