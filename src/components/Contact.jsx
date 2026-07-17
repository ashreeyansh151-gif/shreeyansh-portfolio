import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ogtbc5c",
        "template_bzgnmfr",
        formData,
        "wQkqj70uLnaLPuntn"
      )
      .then(() => {
        alert("✅ Message sent successfully!");

        setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });

        setLoading(false);
      })
      .catch(() => {
        alert("❌ Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section className="Contact" id="📞 Contact Me">
      <h2>📞 Contact Me</h2>

      <div className="Contact-container">

        {/* Contact Details */}

        <div className="Contact-info">

          <div className="Contact-card">
            <h3>📧 Email</h3>
            <a href="mailto:ashreeyansh151@gmail.com">
              ashreeyansh151@gmail.com
            </a>
          </div>

          <div className="Contact-card">
            <h3>📱 Phone</h3>
            <a href="tel:+917077777029">
              +91 7077777029
            </a>
          </div>

          <div className="Contact-card">
            <h3>📍 Location</h3>
            <p>Deogarh, Odisha, India</p>
          </div>

          <div className="Contact-card">
            <h3>📸 Instagram</h3>
            <a
              href="https://instagram.com/shreeyansh__18"
              target="_blank"
              rel="noreferrer"
            >
              @shreeyansh__18
            </a>
          </div>

          <div className="Contact-card">
            <h3>💼 LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/shreeyansh-suman-acharya-b11b262a3"
              target="_blank"
              rel="noreferrer"
            >
              View My LinkedIn
            </a>
          </div>

        </div>

        {/* Contact Form */}

        <form className="Contact-form" onSubmit={sendEmail}>

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;