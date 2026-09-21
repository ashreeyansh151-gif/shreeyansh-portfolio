import cert1 from "../assets/images/cert1.jpeg";
import cert2 from "../assets/images/cert2.jpeg";
import Gen_AI from "../assets/images/Gen_AI.png";

function Certificates() {
  return (
    <section className="Certificates" id="Certificates">
      <h2>📜 Certificates</h2>

      <div className="Certificates-container">

        <div className="Certificates-card">
          <img src={cert1} alt="School National Cricket Certificate" />
           <img src={cert2} alt="School National Cricket Certificate 2" />
          <h3>🏏 School National Cricket</h3>
          <p>Captain – 3 Times</p>
        </div>

        <div className="Certificates-card">
          <h3>🏆 U19 State Camp</h3>
          <p>Odisha Cricket Selection Camp</p>
        </div>

        <div className="Certificates-card">
          <img src={Gen_AI} alt="Generative AI Certificate" />
          <h3>🤖 Generative AI</h3>
          <p>Generative AI Certification</p>
        </div>

      </div>
    </section>
  );
}

export default Certificates;