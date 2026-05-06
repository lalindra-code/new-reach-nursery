import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy — New Reach Nursery",
};

export default function ShippingPage() {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "72px 24px 100px",
      }}
    >
      <div style={{ maxWidth: 680 }}>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#2D9B6A",
            margin: "0 0 16px",
          }}
        >
          Delivery
        </p>
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 40px)",
            color: "#0B3D2E",
            lineHeight: 1.2,
            margin: "0 0 40px",
            letterSpacing: "-0.01em",
          }}
        >
          Shipping Policy
        </h1>
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "#4A4A4A",
            lineHeight: 1.7,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <p style={{ margin: 0 }}>
            Our shipping policy is being finalized and will be published here
            soon. We take care to ensure your plants arrive healthy and
            protected.
          </p>
          <p style={{ margin: 0 }}>
            We currently deliver within Sri Lanka. Shipping times and costs vary
            by location and will be communicated at checkout.
          </p>
          <p style={{ margin: 0 }}>
            We package all plants with care to minimize transit stress and ensure
            they arrive in the best possible condition.
          </p>
          <p style={{ margin: 0 }}>
            For shipping enquiries, please contact us directly.
          </p>
        </div>
      </div>
    </div>
  );
}
