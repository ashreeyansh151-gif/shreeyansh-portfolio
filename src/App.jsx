import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import "./App.css";
import profile from "./assets/images/profile.jpeg";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Cricket from "./components/Cricket";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Backtotop from "./components/Backtotop";
import { motion } from "framer-motion";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />

      <section className="hero" id="home">

        <motion.div
  className="hero-text"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>


          <h3 className="welcome-text">
            🏏 Welcome to My Portfolio
          </h3>

          <h1>
            Shreeyansh
            <br />
            Suman Acharya
          </h1>

          <h2>🏏 Cricketer | 👨‍💻 AI Student</h2>

          <p>
            Passionate cricketer representing the Deogarh District Cricket
            Association, currently pursuing a BCA in AI & Data Analytics at
            Lovely Professional University. Dedicated to continuous improvement
            on the field and in technology.
          </p>

          <div className="hero-buttons">
            <div className="social-icons">
              <a
                href="https://github.com/ashreeyansh151-gif"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shreeyansh-suman-acharya-b11b262a3/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoF42r2XnSc%2B8%2BWXTI9sC3A%3D%3D"
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

            <a
              href="/Resume.pdf"
              download
              className="resume-btn"
            >
              📄 Download Resume
            </a>

            <a
              href="#about"
              className="primary-btn"
            >
              Explore Journey
            </a>

            <a
              href="#📞Contact me"
              className="secondary-btn"
            >
              Contact Me
            </a>

          </div>

        </motion.div>

        <motion.div
  className="hero-image"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
>
          <img src={profile} alt="Shreeyansh" />
        </motion.div>


      </section>

      <About />
      <Cricket />
      <Achievements />
      <Skills />
      <Projects/>
      <Gallery />
      <Certificates />
      <Contact />
      <Footer />
      <Backtotop />
    </>
  );
}

export default App;