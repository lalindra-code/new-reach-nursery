import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — New Reach Nursery",
  description:
    "New Reach Nursery is a family-owned plant nursery in Gampola, Sri Lanka.",
};

export default function AboutPage() {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "72px 24px 100px",
      }}
    >
      <div style={{ maxWidth: 600 }}>
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
          Our Story
        </p>
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 40px)",
            color: "#0B3D2E",
            lineHeight: 1.2,
            margin: "0 0 32px",
            letterSpacing: "-0.01em",
          }}
        >
          About New Reach Nursery
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              color: "#4A4A4A",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            New Reach Nursery is a family-owned plant nursery in Gampola, Sri
            Lanka. We believe nature is therapy. Every plant we grow carries the
            intention to bring calm, mindfulness, and green into people&apos;s
            lives.
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              color: "#4A4A4A",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Nestled in the hills of Gampola, we grow each plant with care and
            intention. We believe the act of tending to something living — of
            watching it unfurl and grow — is one of the quietest forms of
            healing.
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              color: "#4A4A4A",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            We are not just selling plants. We are inviting you to bring a
            little more green, a little more stillness, into your everyday.
          </p>
        </div>
      </div>
    </div>
  );
}
