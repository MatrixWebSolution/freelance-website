import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#000",
        borderBottom: "1px solid #333",
      }}
    >
      <h2 style={{ color: "#fff" }}>Matrix Web Solutions</h2>

      <div style={{ display: "flex", gap: "30px" }}>
        <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </Link>
        <Link href="/services" style={{ color: "#fff", textDecoration: "none" }}>
          Services
        </Link>
        <Link href="/contact" style={{ color: "#fff", textDecoration: "none" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
