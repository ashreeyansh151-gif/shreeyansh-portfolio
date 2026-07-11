import cert1 from "../assets/images/cert1.jpeg";
import cert2 from "../assets/images/cert2.jpeg";

function Certificates() {
  return (
    <section className="Certificates" id="📜Certificates">
      <h2>📜 Certificates</h2>

      <div className="Certificates-container">

        <div className="Certificates-card">
          <h3>🏏 School National Cricket</h3>
          <p>Captain – 3 Times</p>
        </div>

        <div className="Certificates-card">
          <h3>🏆 U19 State Camp</h3>
          <p>Odisha Cricket Selection Camp</p>
        </div>

        <div className="Certificates-card">
          <h3>🎓 Academic Achievement</h3>
          <p>Rank 3 in Class 12</p>
        </div>

      </div>
    </section>
  );
}

export default Certificates;