"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        width: "100%",
        borderBottom: "1px solid #222",
        backgroundColor: "black"
      }}
    >
      <nav
  style={{
    width: "100%",
    padding: "16px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }}
>

        {/* LOGO + BRAND */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Circular Logo */}
          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 0 10px rgba(0, 255, 213, 0.6)"
            }}
          >
            <Image
              src="/logo.png"
              alt="Matrix Web Solutions"
              width={45}
              height={45}
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Brand Text */}
          <div>
            <div style={{ fontSize: "16px", fontWeight: "600", color: "white" }}>
              Matrix Web Solutions
            </div>
            <div style={{ fontSize: "12px", color: "#aaa" }}>
              Web & App Development
            </div>
          </div>
        </div>

        {/* NAV LINKS */}
        <div style={{ display: "flex", gap: "24px" }}>
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            href="/services"
            style={{ color: "white", textDecoration: "none" }}
          >
            Services
          </Link>
          <Link
            href="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
