import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#FAFCFA",
        borderTop: "1px solid #e4ede8",
        padding: "40px 24px",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: 15,
            color: "#0B3D2E",
            margin: 0,
            letterSpacing: "0.03em",
          }}
        >
          Nature is Therapy | New Reach Nursery
        </p>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 24px",
            justifyContent: "center",
          }}
        >
          {[
            { href: "/about", label: "About" },
            { href: "/privacy", label: "Privacy" },
            { href: "/shipping", label: "Shipping" },
            { href: "/returns", label: "Returns" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                color: "#7A7A7A",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            color: "#7A7A7A",
            margin: 0,
          }}
        >
          &copy; {new Date().getFullYear()} New Reach Nursery. Gampola, Sri Lanka.
        </p>
      </div>
    </footer>
  );
}
