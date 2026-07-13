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

function App() {
  return (
    <>
      <Navbar />

      <section className="hero" id="home">

        <div className="hero-text">

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

        </div>

        <div className="hero-image">
          <img src={profile} alt="Shreeyansh" />
        </div>

      </section>

      <About />
      <Cricket />
      <Achievements />
      <Skills />
      <Gallery />
      <Certificates />
      <Contact />
      <Footer />
      <Backtotop />
    </>
  );
}

export default App;