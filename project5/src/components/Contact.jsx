import { Link } from "react-router-dom"
import React from "react";

const Contact = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Contact</h1>

        <div style={styles.detail}>
          <span style={styles.icon}>👤</span>
          <span style={styles.text}>Harshitha</span>
        </div>

        <div style={styles.detail}>
          <span style={styles.icon}>📞</span>
          <span style={styles.text}>+91 98765 43210</span>
        </div>

        <div style={styles.detail}>
          <span style={styles.icon}>📧</span>
          <span style={styles.text}>harshi@email.com</span>
        </div>

        <div style={styles.detail}>
          <span style={styles.icon}>📍</span>
          <span style={styles.text}>Hyderabad, India</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, #fbc2eb, #a6c1ee, #fddb92)",
    fontFamily: "Poppins, Arial, sans-serif",
  },
  card: {
    background: "rgba(255, 255, 255, 0.35)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    padding: "45px 50px",
    borderRadius: "28px",
    textAlign: "center",
    width: "360px",
    boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "30px",
    color: "#5a4fcf",
    fontWeight: "600",
    letterSpacing: "1px",
  },
  detail: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "14px",
    marginBottom: "18px",
  },
  icon: {
    fontSize: "1.3rem",
  },
  text: {
    fontSize: "1.1rem",
    color: "#333",
    fontWeight: "500",
  },
};

export default Contact;