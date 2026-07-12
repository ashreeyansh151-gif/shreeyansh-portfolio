import { useState } from "react";

<div className="gallery-container">
  {images.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`Gallery ${index + 1}`}
      onClick={() => setSelectedImage(image)}
    />
  ))}
</div>
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
        const [selectedImage, setSelectedImage] = useState(null);
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