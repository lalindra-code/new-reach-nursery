import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "#FAFCFA",
        borderBottom: "1px solid #e4ede8",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image
            src="/images/logo.png"
            alt="New Reach Nursery"
            width={220}
            height={55}
            priority
            style={{
              height: "clamp(45px, 5vw, 55px)",
              width: "auto",
            }}
          />
        </Link>

        <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <Link
            href="/"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              color: "#4A4A4A",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Home
          </Link>
          <Link
            href="/about"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              color: "#4A4A4A",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
