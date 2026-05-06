"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import QuantitySelector from "@/components/QuantitySelector";
import PayableButton from "@/components/PayableButton";

export default function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const total = product.price * quantity;

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "48px 24px 80px",
      }}
    >
      {/* Breadcrumb */}
      <nav style={{ marginBottom: 32 }}>
        <Link
          href="/"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            color: "#7A7A7A",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <span style={{ color: "#7A7A7A", margin: "0 8px", fontSize: 13 }}>
          /
        </span>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            color: "#0B3D2E",
          }}
        >
          {product.name}
        </span>
      </nav>

      {/* Product layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 56,
          alignItems: "start",
        }}
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "75%",
            borderRadius: 8,
            overflow: "hidden",
            backgroundColor: "#e8f5ee",
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(24px, 3vw, 34px)",
                color: "#0B3D2E",
                margin: "0 0 12px",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              {product.name}
            </h1>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 22,
                color: "#2D9B6A",
                margin: 0,
              }}
            >
              LKR {product.price.toLocaleString()}
            </p>
          </div>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 15,
              color: "#4A4A4A",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {product.description}
          </p>

          {/* Specs */}
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {product.specs.map((spec, i) => (
              <li
                key={i}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "#4A4A4A",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "#2D9B6A",
                    flexShrink: 0,
                  }}
                />
                {spec}
              </li>
            ))}
          </ul>

          <hr style={{ border: "none", borderTop: "1px solid #e4ede8", margin: 0 }} />

          {/* Quantity and total */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <QuantitySelector value={quantity} onChange={setQuantity} />

            {quantity > 1 && (
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "#7A7A7A",
                  margin: 0,
                }}
              >
                {quantity} plants &times; LKR {product.price.toLocaleString()} ={" "}
                <strong style={{ color: "#0B3D2E" }}>
                  LKR {total.toLocaleString()}
                </strong>
              </p>
            )}
          </div>

          <PayableButton
            amount={total}
            orderDescription={product.name}
            disabled={false}
          />

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              color: "#7A7A7A",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Secure checkout via Payable. You will be redirected to complete your
            payment.
          </p>
        </div>
      </div>
    </div>
  );
}
