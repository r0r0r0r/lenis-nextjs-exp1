export type Product = {
  id: string;
  slug: string;
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
};

export const products: Record<string, Product> = {
  "coral-crush": {
    id: "coral-crush",
    slug: "coral-crush",
    name: "CORAL CRUSH",
    subtitle: "ADAPTOGENIC HIBISCUS + SPARKLING BOTANICALS",
    price: 48,
    notes: "Tart Hibiscus, Wild Rose, Earthy Adaptogens.",
    vibe: "Calming, Rooted, Radiant.",
    function: "Cortisol Balance + Skin Glow.",
    images: {
      hero: "/assets/hero-can.png",
      macro: "/assets/coral_texture_macro.png",
      ingredient: "/assets/ingredient_hibiscus.png",
      lifestyle: "/assets/lifestyle_aura.png"
    }
  },
  "rich-cacao": {
    id: "rich-cacao",
    slug: "rich-cacao",
    name: "RICH CACAO",
    subtitle: "CEREMONIAL CACAO + L-THEANINE",
    price: 48,
    notes: "Deep Cocoa, Toasted Macadamia, Vanilla Bean.",
    vibe: "Grounded, Focused, Warm.",
    function: "Sustained Energy + Mental Clarity.",
    images: {
      hero: "/assets/flavor-can.png", 
      macro: "/assets/coral_texture_macro.png", 
      ingredient: "/assets/ingredient_hibiscus.png", 
      lifestyle: "/assets/lifestyle_aura.png" 
    }
  },
  "matcha-yuzu": {
    id: "matcha-yuzu",
    slug: "matcha-yuzu",
    name: "MATCHA YUZU",
    subtitle: "CEREMONIAL MATCHA + BRIGHT SPARKLING YUZU",
    price: 48,
    notes: "Earthy Matcha, Zesty Yuzu, Subtle Sweetness.",
    vibe: "Awake, Vibrating, Clear.",
    function: "Clean Energy + Antioxidant Boost.",
    images: {
      hero: "/assets/green-can.png",
      macro: "/assets/coral_texture_macro.png",
      ingredient: "/assets/ingredient_hibiscus.png",
      lifestyle: "/assets/lifestyle_aura.png"
    }
  },
  "lemon-lavender": {
    id: "lemon-lavender",
    slug: "lemon-lavender",
    name: "LEMON LAVENDER",
    subtitle: "MEYER LEMON + FRENCH LAVENDER EXTRACT",
    price: 48,
    notes: "Bright Citrus, Floral Lavender, Crisp Finish.",
    vibe: "Relaxed, Dreamy, Soft.",
    function: "Stress Relief + Relaxation.",
    images: {
      hero: "/assets/lemon_lavender_can.png",
      macro: "/assets/coral_texture_macro.png",
      ingredient: "/assets/ingredient_hibiscus.png",
      lifestyle: "/assets/lifestyle_aura.png"
    }
  },
  "berry-mint": {
    id: "berry-mint",
    slug: "berry-mint",
    name: "BERRY MINT",
    subtitle: "WILD BERRY + REFRESHING PEPPERMINT",
    price: 48,
    notes: "Juicy Berries, Cool Mint, Botanical Base.",
    vibe: "Cool, Invigorating, Fresh.",
    function: "Digestive Support + Refreshment.",
    images: {
      hero: "/assets/berry_mint_can.png",
      macro: "/assets/coral_texture_macro.png",
      ingredient: "/assets/ingredient_hibiscus.png",
      lifestyle: "/assets/lifestyle_aura.png"
    }
  },
  "vanilla-oat": {
    id: "vanilla-oat",
    slug: "vanilla-oat",
    name: "VANILLA OAT",
    subtitle: "MADAGASCAR VANILLA + CREAMY OAT MILK",
    price: 48,
    notes: "Smooth Vanilla, Creamy Oat, Touch of Salt.",
    vibe: "Cozy, Nourishing, Gentle.",
    function: "Comfort + Sustained Fullness.",
    images: {
      hero: "/assets/vanilla_oat_can.png",
      macro: "/assets/coral_texture_macro.png",
      ingredient: "/assets/ingredient_hibiscus.png",
      lifestyle: "/assets/lifestyle_aura.png"
    }
  }
};
