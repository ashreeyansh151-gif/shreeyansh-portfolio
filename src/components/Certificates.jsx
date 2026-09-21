import cert1 from "../assets/images/cert1.jpeg";
import cert2 from "../assets/images/cert2.jpeg";
import Gen_AI from "../assets/images/Gen_AI.png";

function Certificates() {
  return (
    <section className="Certificates" id="Certificates">

      {/* Section Heading */}
      <div className="section-heading">
        <span>📜</span>
        <h2>Certificates & Recognition</h2>
      </div>

      <p className="certificates-intro">
        A collection of my cricket achievements and academic certifications.
      </p>

      <div className="Certificates-container">

        {/* SCHOOL NATIONAL CRICKET */}
        <div className="Certificates-card national-card">

          <div className="certificate-header">
            <span className="certificate-icon">🏏</span>

            <div>
              <h3>School National Cricket</h3>
              <p>National-level cricket representation</p>
            </div>
          </div>

          <div className="certificate-images">
            <div className="certificate-image">
              <img
                src={cert1}
                alt="School National Cricket Certificate 1"
              />
            </div>

            <div className="certificate-image">
              <img
                src={cert2}
                alt="School National Cricket Certificate 2"
              />
            </div>
          </div>

          <div className="certificate-footer">
            <span>🏅</span>
            <p>Captain – 3 Times</p>
          </div>

        </div>


        {/* U19 STATE CAMP */}
        <div className="Certificates-card">

          <div className="certificate-header">
            <span className="certificate-icon">🏆</span>

            <div>
              <h3>U19 State Camp</h3>
              <p>Odisha Cricket Selection Camp</p>
            </div>
          </div>

          <div className="achievement-content">
            <div className="achievement-icon">
              🏏
            </div>

            <h4>Odisha Cricket</h4>

            <p>
              Selected for the U19 State Cricket Camp,
              representing my district at the state level.
            </p>
          </div>

          <div className="certificate-footer">
            <span>📍</span>
            <p>Odisha • U19</p>
          </div>

        </div>


        {/* GENERATIVE AI */}
        <div className="Certificates-card">

          <div className="certificate-header">
            <span className="certificate-icon">🤖</span>

            <div>
              <h3>Generative AI</h3>
              <p>Professional Certification</p>
            </div>
          </div>

          <div className="single-certificate">
            <img
              src={Gen_AI}
              alt="Generative AI Certificate"
            />
          </div>

          <div className="certificate-footer">
            <span>🎓</span>
            <p>Introduction to Generative AI Studio</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Certificates;