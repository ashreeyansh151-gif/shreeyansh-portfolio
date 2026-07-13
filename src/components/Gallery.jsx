import { useState } from "react";

import profile from "../assets/images/profile.jpeg";
import batting1 from "../assets/images/batting1.jpeg";
import batting2 from "../assets/images/batting2.jpeg";
import team from "../assets/images/team.jpeg";
import national from "../assets/images/national.jpeg";
import side from "../assets/images/side.jpeg";
import sports from "../assets/images/sports.jpeg";
import front from "../assets/images/front.jpeg";
import white from "../assets/images/white.jpeg";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    batting1,
    batting2,
    team,
    national,
    side,
    white,
    front,
    sports,
  ];

  return (
    <section className="Gallery" id="gallery">
      <h2>📸 Cricket Gallery</h2>
      <p className="Gallery-subtitle">
  A glimpse of my cricket journey through matches, practice sessions, team moments, and achievements.
</p>

      <div className="featured-profile">
        <img src={profile} alt="Profile" />
      </div>

      <div className="Gallery-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Preview" />
        </div>
      )}
    </section>
  );
}

export default Gallery;