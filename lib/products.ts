export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  specs: string[];
}

export const products: Product[] = [
  {
    id: "product-1",
    name: "Product One",
    price: 5000,
    image: "https://placehold.co/800x600/e8f5ee/0B3D2E?text=Product+One",
    description:
      "A plant for your calm space. Grown with care in the hills of Gampola, this plant brings stillness and green wherever it lives.",
    specs: [
      "Thrives in indirect light",
      "Low maintenance, high reward",
      "Air-purifying qualities",
      "Suitable for indoor spaces",
      "Grown without harsh chemicals",
    ],
  },
  {
    id: "product-2",
    name: "Product Two",
    price: 7500,
    image: "https://placehold.co/800x600/e8f5ee/0B3D2E?text=Product+Two",
    description:
      "Nature is therapy. This plant is a quiet companion — steady, green, and grounding. Perfect for those who need a little more calm in their corner.",
    specs: [
      "Ideal for desks and shelves",
      "Grows slowly, lives long",
      "Minimal watering required",
      "Adapts well to most climates",
      "A gentle reminder to breathe",
    ],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
