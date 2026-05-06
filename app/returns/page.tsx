import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns Policy — New Reach Nursery",
};

export default function ReturnsPage() {
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
          Policies
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
          Returns Policy
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
            Our returns policy is being finalized and will be published here
            soon. Your satisfaction and the wellbeing of the plants matter to us.
          </p>
          <p style={{ margin: 0 }}>
            If your plant arrives damaged or in poor condition, please reach out
            to us within 48 hours of delivery. We will work with you to make it
            right.
          </p>
          <p style={{ margin: 0 }}>
            Because plants are living things, we handle each case individually
            and with care.
          </p>
          <p style={{ margin: 0 }}>
            For any concerns, please contact us directly.
          </p>
        </div>
      </div>
    </div>
  );
}
