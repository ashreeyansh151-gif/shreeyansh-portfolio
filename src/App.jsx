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
import Resume from "./src/assets/Resume/SResume.pdf";


function App() {
  return (
    <>
      <Navbar />
      

      <div className="hero" id="home">
        <div className="hero-text">
          <h3 className="welcome-text">🏏 Welcome to My Portfolio</h3>

          <h1>
            Shreeyansh
            <br />
            Suman Acharya
          </h1>

          <h2> 🏏Cricketer | 👨‍💻AI Student</h2>

          <p>
            <p>
  Passionate cricketer representing the Deogarh District Cricket Association,
  currently pursuing a BCA in AI & Data Analytics at Lovely Professional University.
  Dedicated to continuous improvement on the field and in technology.
</p>
<a
  href={Resume}
  download
  className="Resume-btn"
>
  📄 Download Resume
</a>
          </p>

          <div className="buttons">
            <button>Explore Journey</button>
            <button className="contact-btn">Contact Me</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Shreeyansh" />
        </div>
      </div>

      <About />
      <Cricket/>
      <Achievements/>
      <Skills/>
      <Gallery/>
      <Certificates/>
      <Contact/>
      <Footer/>
      <Backtotop/>

    </>
  );
}

export default App;