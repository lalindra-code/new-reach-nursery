import { getProduct, products } from "@/lib/products";
import { notFound } from "next/navigation";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return {};
  return {
    title: `${product.name} — New Reach Nursery`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
