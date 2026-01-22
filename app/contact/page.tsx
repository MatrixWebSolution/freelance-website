"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        alert("Something went wrong");
      }
    } catch {
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* HEADING */}
        <h1 style={headingStyle}>Contact Us</h1>
        <p style={subtitleStyle}>
          Have a project in mind or need support? Fill out the form below and
          we'll get back to you.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
          />

          <input
            type="tel"
            placeholder="Your Mobile Number"
            value={form.phone}
            required
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            value={form.message}
            required
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={textareaStyle}
          />

          <button type="submit" disabled={loading} style={buttonStyle}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* BOTTOM CONTACT INFO */}
        <div style={bottomContainerStyle}>
          <div style={contactItemStyle}>
            <span style={iconStyle}>📧</span>
            <span>contact@matrixwebsolutions.com</span>
          </div>

          <div style={contactItemStyle}>
            <span style={iconStyle}>📞</span>
            <span>+91 63690 85353</span>
          </div>

          <div style={contactItemStyle}>
            <span style={iconStyle}>📍</span>
            <span>India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const sectionStyle = {
  backgroundColor: "#000",
  minHeight: "100vh",
  padding: "120px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
};

const containerStyle = {
  width: "100%",
  maxWidth: "720px",
  textAlign: "center" as const,
};

const headingStyle = {
  fontSize: "44px",
  fontWeight: "700",
  color: "#fff",
  marginBottom: "12px",
};

const subtitleStyle = {
  fontSize: "16px",
  color: "#bdbdbd",
  marginBottom: "40px",
  lineHeight: "1.6",
};

const formStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "16px 18px",
  fontSize: "15px",
  backgroundColor: "#0c0c0c",
  color: "#fff",
  border: "1px solid #2a2a2a",
  borderRadius: "10px",
  outline: "none",
};

const textareaStyle = {
  ...inputStyle,
  resize: "none" as const,
};

const buttonStyle = {
  marginTop: "10px",
  padding: "18px",
  fontSize: "16px",
  fontWeight: "600",
  backgroundColor: "#fff",
  color: "#000",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

/* ===== Bottom Contact Styles ===== */

const bottomContainerStyle = {
  marginTop: "60px",
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  flexWrap: "wrap" as const,
};

const contactItemStyle = {
  backgroundColor: "#0c0c0c",
  color: "#fff",
  padding: "14px 22px",
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  border: "1px solid #2a2a2a",
  fontSize: "15px",
};

const iconStyle = {
  fontSize: "18px",
};
