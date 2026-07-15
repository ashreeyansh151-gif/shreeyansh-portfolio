import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#🏏Cricket Journey" onClick={closeMenu}>Cricket</a></li>
        <li><a href="#🏆Achievements" onClick={closeMenu}>Achievements</a></li>
        <li><a href="#💻 Skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#👨‍💻 Projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#📸 Gallery" onClick={closeMenu}>Gallery</a></li>
        <li><a href="#📜Certificates" onClick={closeMenu}>Certificates</a></li>
        <li><a href="#📞Contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;