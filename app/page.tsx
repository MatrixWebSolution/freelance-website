"use client";

import Link from "next/link";

export default function Home() {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 70px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <h1
        style={{
          fontSize: "56px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        We Build Websites & Mobile Apps
      </h1>

      <p
        style={{
          fontSize: "18px",
          maxWidth: "720px",
          lineHeight: "1.6",
          marginBottom: "32px",
          color: "#ccc",
        }}
      >
        We help businesses create modern, scalable, and professional digital
        solutions that drive growth and long-term success.
      </p>

      <Link href="/contact" style={{ textDecoration: "none" }}>
        <button
          style={{
            padding: "14px 32px",
            fontSize: "16px",
            fontWeight: "600",
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          Get a Free Consultation
        </button>
      </Link>
    </section>
  );
}
