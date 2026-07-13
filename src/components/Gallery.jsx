import { useState } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

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
  const [selectedIndex, setSelectedIndex] = useState(null);

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

  const previousImage = () => {
    setSelectedIndex(
      selectedIndex === 0
        ? images.length - 1
        : selectedIndex - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex(
      selectedIndex === images.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  return (
    <section className="Gallery" id="#📸 Gallery">
      <h2>📸 Gallery</h2>

      <p className="Gallery-subtitle">
        A glimpse of my cricket journey through matches, practice sessions,
        team moments, and achievements.
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
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="lightbox">
          <button
            className="close-btn"
            onClick={() => setSelectedIndex(null)}
          >
            <FaTimes />
          </button>

          <button
            className="prev-btn"
            onClick={previousImage}
          >
            <FaChevronLeft />
          </button>

          <img
            src={images[selectedIndex]}
            alt="Preview"
            className="lightbox-image"
          />

          <button
            className="next-btn"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;