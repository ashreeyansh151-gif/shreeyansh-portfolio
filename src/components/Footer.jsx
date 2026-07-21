import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="Footer">

      <div className="Footer-top">

        <div className="Footer-brand">
          <h2>🏏 SSA</h2>
          <p>
            Passionate Cricketer • AI Student • Future Developer
          </p>
        </div>

        <div className="Footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#👨‍💻 Projects">Projects</a>
          <a href="#📸 Gallery">Gallery</a>
          <a href="#📞 Contact Me">Contact</a>
        </div>

        <div className="Footer-socials">

          <a
            href="https://github.com/ashreeyansh151-gif"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shreeyansh-suman-acharya-b11b262a3"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/shreeyansh__18"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a href="mailto:ashreeyansh151@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="Footer-bottom">
        <p>
          © 2026 Shreeyansh Suman Acharya. All Rights Reserved.
        </p>

        <p>
          Made with ❤️ using React & Vite
        </p>
      </div>

    </footer>
  );
}

export default Footer;