import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "New Reach Nursery — Nature is Therapy",
  description:
    "A family-owned plant nursery in Gampola, Sri Lanka. Every plant we grow carries the intention to bring calm, mindfulness, and green into people's lives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FAFCFA",
          margin: 0,
        }}
      >
        <Header />
        <main style={{ flex: 1, paddingTop: 64 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
