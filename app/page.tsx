import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "80px 24px 60px",
          textAlign: "center",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#2D9B6A",
            marginBottom: 16,
            margin: "0 0 16px",
          }}
        >
          Gampola, Sri Lanka
        </p>
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 52px)",
            color: "#0B3D2E",
            lineHeight: 1.15,
            margin: "0 0 20px",
            letterSpacing: "-0.02em",
          }}
        >
          Nature is therapy.
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 17,
            color: "#4A4A4A",
            lineHeight: 1.6,
            maxWidth: 460,
            margin: "0 auto",
          }}
        >
          Every plant we grow carries the intention to bring calm, mindfulness,
          and green into people&apos;s lives.
        </p>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <hr style={{ border: "none", borderTop: "1px solid #e4ede8", margin: 0 }} />
      </div>

      {/* Products */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 24px 80px",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#7A7A7A",
            marginBottom: 32,
            margin: "0 0 32px",
          }}
        >
          Our Plants
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
