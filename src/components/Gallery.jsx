import batting1 from "../assets/images/batting1.jpeg";
import batting2 from "../assets/images/batting2.jpeg";
import profile from "../assets/images/profile.jpeg";
import team from "../assets/images/team.jpeg";
import front from "../assets/images/front.jpeg";
import national from "../assets/images/national.jpeg";
import side from "../assets/images/side.jpeg";
import sports from "../assets/images/sports.jpeg";
import white from "../assets/images/white.jpeg";

function Gallery() {
  return (
    <section className="Gallery" id="📸Gallery">
      <h2>📸 Cricket Gallery</h2>

      <div className="featured-profile">
        <img src={profile} alt="Profile" />
      </div>

      <div className="Gallery-container">
        <img src={batting1} alt="Batting 1" />
        <img src={batting2} alt="Batting 2" />
        <img src={team} alt="Team" />
        <img src={national} alt="National" />
        <img src={side} alt="Side" />
        <img src={white} alt="White" />
        <img src={front} alt="Front" />
        <img src={sports} alt="Sports" />
      </div>
    </section>
  );
}

export default Gallery;