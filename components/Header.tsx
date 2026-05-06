import Link from "next/link";

export default function Header() {
  return (
    <>
      <style>{`
        .nrn-nav-links { gap: 28px; }
        @media (max-width: 480px) { .nrn-nav-links { gap: 20px; } }
      `}</style>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "#FAFCFA",
          borderBottom: "1px solid #e4ede8",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#0B3D2E",
            }}
          >
            New Reach Nursery
          </Link>

          <nav
            className="nrn-nav-links"
            style={{ display: "flex", alignItems: "center" }}
          >
            {[
              { href: "/about", label: "About" },
              { href: "/privacy", label: "Privacy" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 13,
                  letterSpacing: "0.04em",
                  color: "#4A4A4A",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
