import cert1 from "../assets/images/cert1.jpeg";
import cert2 from "../assets/images/cert2.jpeg";
import Gen_AI from "../assets/images/Gen_AI.png";

function Certificates() {
  return (
    <section className="Certificates" id="Certificates">
      <h2>📜 Certificates</h2>

      <div className="Certificates-container">

        {/* School National Cricket */}
        <div className="Certificates-card">
          <h3>🏏 School National Cricket</h3>

          <div className="certificate-images">
            <img src={cert1} alt="School National Cricket Certificate 1" />
            <img src={cert2} alt="School National Cricket Certificate 2" />
          </div>

          <p>Captain – 3 Times</p>
        </div>

        {/* U19 State Camp */}
        <div className="Certificates-card">
          <h3>🏆 U19 State Camp</h3>
          <p>Odisha Cricket Selection Camp</p>
        </div>

        {/* Academic Achievement */}
        <div className="Certificates-card">
          <h3>🎓 Academic Achievement</h3>
          <p>Rank 3 in Class 12</p>
          <div className="Certificates-card">
  <h3>🎓 Academic Achievement</h3>

  <img
    src={Gen_AI}
    alt="Generative AI Certificate"
    className="single-certificate"
  />

  <p>Rank 3 in Class 12</p>
</div>
        </div>

      </div>
    </section>
  );
}

export default Certificates;