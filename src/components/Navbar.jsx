import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="Navbar">
      <div className="logo">🏏 SSA</div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "Nav-links active" : "Nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#🏏Cricket Journey">Cricket</a></li>
        <li><a href="#🏆Achievements">Achievements</a></li>
        <li><a href="#💻 Skills">Skills</a></li>
        <li><a href="#📸 Gallery">Gallery</a></li>
        <li><a href="#📜Certificates">Certificates</a></li>
        <li><a href="#📞Contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;