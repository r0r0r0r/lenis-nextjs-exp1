"use client";

import Image from "next/image";
import { Navigation } from "@/components/Navigation";

export default function About() {
  return (
    <main className="min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-coral selection:text-white pb-32">
      <Navigation />
      
      <section className="max-w-4xl mx-auto px-6 pt-12 md:pt-24 text-center">
        <h1 className="font-serif text-[15vw] md:text-[120px] leading-[0.85] tracking-tight mb-12 animate-[fadeInUp_1s_ease-out_forwards]">
          OUR STORY
        </h1>
        <p className="font-sans text-lg md:text-xl leading-relaxed opacity-80 mb-24 max-w-2xl mx-auto font-light animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
          AURA was born out of a desire for something better. We believed that functional beverages shouldn't taste medicinal, and that sparkling water shouldn't be boring. By combining ancient botanical wisdom with modern flavor science, we created a lineup of drinks designed to support your mind, body, and spirit—without compromising on taste or aesthetic.
        </p>

        <div className="relative w-full h-[40vh] md:h-[60vh] rounded-[32px] overflow-hidden mb-24 animate-[fadeInUp_1s_ease-out_0.4s_forwards] shadow-2xl">
          <Image src="/assets/lifestyle_aura.png" alt="AURA Lifestyle" fill className="object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-left animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
          <div>
            <h2 className="font-serif text-4xl mb-6 text-brand-charcoal tracking-tight">The Process</h2>
            <p className="font-sans leading-relaxed opacity-70">
              Each flavor takes months to develop. We source raw, organic botanicals and adaptogens from sustainable farms globally. Our unique cold-extraction process ensures that the functional benefits—whether it's the calming properties of L-Theanine or the cortisol-balancing effects of Ashwagandha—are preserved in every can.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-4xl mb-6 text-brand-charcoal tracking-tight">The Promise</h2>
            <p className="font-sans leading-relaxed opacity-70">
              Zero added sugars. No artificial flavors or coloring. Just sparkling water, real fruit extracts, and potent botanical blends. We've stripped away everything unnecessary so you can focus on how you feel. Because true radiance starts from within.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
