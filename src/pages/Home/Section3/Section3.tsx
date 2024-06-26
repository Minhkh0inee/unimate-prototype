import "./Section3.css";
import ThinkingFace from "../../../assets/image/amico2.png";

const Section3 = () => {
  return (
    <div className="container-section-3">
      <section className="section-3">
        <div className="section-3-left">
          <img
            src={ThinkingFace}
            alt="section3-logo"
            className="section-3-logo"
          />
        </div>
        <div className="section-3-right">
          <div className="section-3-title color-blue-bell">Why Us ?</div>
          <p className="section-3-paragraph-1">
            Choose us for your academic journey abroad. We've <span className="nl">compiled
            all essential data, connected with experienced</span>  <span className="nl"> mentors,
            ensuring you thrive in your international studies.</span>
          </p>

          <div className="section-3-experience">
            <div className="experience-number color-blue-bell">5+</div>
            <div className="experience-content color-blue-bell">
              YEARS OF <br></br> EXPERIENCED MENTORS
            </div>
          </div>

          <p className="section-3-paragraph-1">
            Dedicated university students committed to sharing their <span className="nl">
            knowledge with future generations.</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Section3;
