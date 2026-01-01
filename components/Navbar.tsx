import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        height: "72px", // 🔹 slightly bigger navbar
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        backgroundColor: "#000",
        borderBottom: "1px solid #333", // 🔹 slightly thicker line
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "22px", // 🔹 bigger logo font
          fontWeight: "600",
          color: "#fff",
          fontFamily: "serif",
        }}
      >
        Matrix Web Solutions
      </div>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          gap: "32px", // 🔹 more spacing
        }}
      >
        <Link href="/" style={linkStyle}>
          Home
        </Link>
        <Link href="/services" style={linkStyle}>
          Services
        </Link>
        <Link href="/contact" style={linkStyle}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "16px", // 🔹 bigger menu font
  fontWeight: "500",
  fontFamily: "sans-serif",
};
