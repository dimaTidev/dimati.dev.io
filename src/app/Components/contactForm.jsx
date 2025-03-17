//fa338c8bd88ff419ae63cb28c9bbb106

"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "@/lib/UIComponents/Button";
import { Size, Variant } from "@/lib/UIComponents/uiCommon";
import ActionButton from "@/lib/UIComponents/ActionButton";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Status message
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
  
    const formDataEncoded = new URLSearchParams();
    formDataEncoded.append("name", formData.name);
    formDataEncoded.append("email", formData.email);
    formDataEncoded.append("message", formData.message);
    formDataEncoded.append("_captcha", "false"); // Optional: Disable Captcha
  
    try {
      const response = await fetch("https://formsubmit.co/fa338c8bd88ff419ae63cb28c9bbb106", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataEncoded.toString(),
      });
  
      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      setStatus("❌ Error sending message.");
    }
  
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={handleChange}
        className={styles.input}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        value={formData.message}
        onChange={handleChange}
        className={styles.textarea}
      />
      <ActionButton variant={Variant.PRIMARY} size={Size.S} type="submit" className={styles.button} disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </ActionButton>
      {status && <p className={styles.status}>{status}</p>}
    </form>
  );
}
