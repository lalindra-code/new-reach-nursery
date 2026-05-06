import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — New Reach Nursery",
};

export default function PrivacyPage() {
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
          Legal
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
          Privacy Policy
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
            This privacy policy is a placeholder and will be updated soon. We
            respect your privacy and are committed to protecting any personal
            information you share with us.
          </p>
          <p style={{ margin: 0 }}>
            We collect only the information necessary to process your orders and
            provide our service. We do not sell or share your personal data with
            third parties.
          </p>
          <p style={{ margin: 0 }}>
            If you have any questions about our privacy practices, please reach
            out to us directly.
          </p>
        </div>
      </div>
    </div>
  );
}
