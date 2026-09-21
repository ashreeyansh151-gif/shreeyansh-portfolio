import cert1 from "../assets/images/cert1.jpeg";
import cert2 from "../assets/images/cert2.jpeg";
import Gen_AI from "../assets/images/Gen_AI.png";
import oca from "../assets/images/oca.jpg";

function Certificates() {
  return (
    <section className="Certificates" id="Certificates">

      {/* SECTION HEADER */}
      <div className="certificates-heading">
        <span>📜</span>
        <div>
          <h2>Certificates & Recognition</h2>
          <p>
            A collection of my cricket achievements and professional certifications.
          </p>
        </div>
      </div>


      {/* CARDS */}
      <div className="Certificates-container">

        {/* =================================
            SCHOOL NATIONAL CRICKET
        ================================= */}
        <div className="Certificates-card">

          <div className="card-top">
            <div className="card-icon">
              🏏
            </div>

            <div>
              <h3>School National Cricket</h3>
              <p>National-level representation</p>
            </div>
          </div>


          <div className="national-certificates">

            <div className="certificate-preview">
              <img
                src={cert1}
                alt="School National Cricket Certificate"
              />
            </div>

            <div className="certificate-preview">
              <img
                src={cert2}
                alt="School National Cricket Certificate"
              />
            </div>

          </div>


          <div className="card-info">
            <span>🏅</span>
            <div>
              <strong>Captain – 3 Times</strong>
              <p>School National Cricket</p>
            </div>
          </div>

        </div>


        {/* =================================
            U19 STATE CAMP
        ================================= */}
        <div className="Certificates-card">

          <div className="card-top">
            <div className="card-icon">
              🏆
            </div>

            <div>
              <h3>U19 State Camp</h3>
              <p>Odisha Cricket Association</p>
            </div>
          </div>


          {/* OCA LOGO */}
          <div className="oca-container">
            <img
              src={oca}
              alt="Odisha Cricket Association"
            />
          </div>


          <div className="u19-content">

            <h4>Odisha Cricket Association</h4>

            <p>
              Selected for the U19 State Cricket Camp,
              representing my district at the state level.
            </p>

          </div>


          <div className="card-info">
            <span>📍</span>
            <div>
              <strong>Odisha • U19</strong>
              <p>State Cricket Camp</p>
            </div>
          </div>

        </div>


        {/* =================================
            GENERATIVE AI
        ================================= */}
        <div className="Certificates-card">

          <div className="card-top">
            <div className="card-icon">
              🤖
            </div>

            <div>
              <h3>Generative AI</h3>
              <p>Professional certification</p>
            </div>
          </div>


          <div className="ai-certificate">
            <img
              src={Gen_AI}
              alt="Generative AI Certificate"
            />
          </div>


          <div className="card-info">
            <span>🎓</span>
            <div>
              <strong>Introduction to Generative AI Studio</strong>
              <p>Professional Certification</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Certificates;