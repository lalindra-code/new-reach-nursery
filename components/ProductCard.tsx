import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e4ede8",
        borderRadius: 8,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", width: "100%", paddingTop: "75%" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          flexGrow: 1,
        }}
      >
        <h2
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 18,
            color: "#0B3D2E",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {product.name}
        </h2>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 20,
            fontWeight: 600,
            color: "#2D9B6A",
            margin: 0,
          }}
        >
          LKR {product.price.toLocaleString()}
        </p>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            color: "#4A4A4A",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {product.description}
        </p>

        <Link
          href={`/products/${product.id}`}
          style={{
            display: "inline-block",
            marginTop: 8,
            padding: "10px 20px",
            backgroundColor: "#2D9B6A",
            color: "#FAFCFA",
            textDecoration: "none",
            borderRadius: 6,
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            textAlign: "center",
            letterSpacing: "0.02em",
            alignSelf: "flex-start",
          }}
        >
          View Plant
        </Link>
      </div>
    </div>
  );
}
