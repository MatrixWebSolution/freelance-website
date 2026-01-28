"use client";

export default function Services() {
  const services = [
    "Website Design & Development",
    "Web Application Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "Website Maintenance & Support",
    "SEO Optimization",
    "Content Management Systems",
    "Custom Software Development",
    "UI/UX Design",
    "Digital Marketing Services",
  ];

  return (
    <section
      style={{
        backgroundColor: "#b90000",
        color: "#fff",
        minHeight: "65vh", // 👈 slightly smaller
        paddingTop: "90px", // 👈 moved UP a bit
        paddingBottom: "80px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "46px",
          fontWeight: "700",
          marginBottom: "45px",
        }}
      >
        Our Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              padding: "24px",
              border: "1px solid #333",
              borderRadius: "14px",
              fontSize: "18px",
              backgroundColor: "#0a0a0a",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#fff";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#333";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}
