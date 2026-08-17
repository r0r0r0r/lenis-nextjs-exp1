import { products } from "@/data/products";
import PDPClient from "./PDPClient";

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug: slug,
  }));
}

export default async function DynamicPDP({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products[resolvedParams.slug];
  return <PDPClient product={product} />;
}
