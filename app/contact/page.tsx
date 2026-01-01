"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
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
        setForm({ name: "", mobile: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Server error. Please try later.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h2 style={headingStyle}>Contact Us</h2>
        <p style={subTextStyle}>
          Have a project in mind or need support? Fill out the form below and
          we’ll get back to you.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "30px",
          }}
        >
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
            value={form.mobile}
            required
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
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
            rows={5}
            value={form.message}
            required
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: "10px",
              padding: "16px",
              fontSize: "16px",
              fontWeight: "600",
              backgroundColor: "#fff",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* CONTACT INFO CARDS */}
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div style={infoCard}>
            📧
            <span>contact@matrixwebsolutions.com</span>
          </div>

          <div style={infoCard}>
            📞
            <span>+91 98765 43210</span>
          </div>

          <div style={infoCard}>
            📍
            <span>India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* STYLES */

const headingStyle = {
  fontSize: "46px",
  fontWeight: "700",
  marginBottom: "12px",
};

const subTextStyle = {
  fontSize: "16px",
  color: "#ccc",
  lineHeight: "1.6",
};

const inputStyle = {
  padding: "14px 16px",
  fontSize: "15px",
  backgroundColor: "#0a0a0a",
  color: "#fff",
  border: "1px solid #333",
  borderRadius: "8px",
  outline: "none",
};

const infoCard = {
  backgroundColor: "#0a0a0a",
  border: "1px solid #333",
  borderRadius: "12px",
  padding: "18px 26px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "15px",
  color: "#ccc",
  minWidth: "220px",
  justifyContent: "center",
};
