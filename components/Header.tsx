import Link from "next/link";

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
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 2C8 2 4 5.5 4 10c0 3.5 2 6.5 5 8v4h6v-4c3-1.5 5-4.5 5-8 0-4.5-4-8-8-8z"
              fill="#2D9B6A"
            />
            <path
              d="M12 10 Q10 7 7 6"
              stroke="#FAFCFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.12em",
              color: "#0B3D2E",
              textTransform: "uppercase",
            }}
          >
            New Reach Nursery
          </span>
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
