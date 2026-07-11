function Contact() {
  return (
    <section className="Contact" id="📞Contact">
      <h2>📞 Contact Me</h2>

      <div className="Contact-container">

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
            href="https://www.instagram.com/shreeyansh__18/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @shreeyansh__18
          </a>
        </div>

        <div className="Contact-card">
          <h3>💼 LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/shreeyansh-suman-acharya-b11b262a3"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;