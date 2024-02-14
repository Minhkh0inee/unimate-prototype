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
            Choose us for your academic journey abroad. We've <br></br> compiled
            all essential data, connected with experienced <br></br> mentors,
            ensuring you thrive in your international studies.
          </p>

          <div className="section-3-experience">
            <div className="experience-number color-blue-bell">5+</div>
            <div className="experience-content color-blue-bell">
              YEARS OF <br></br> EXPERIENCED MENTORS
            </div>
          </div>

          <p className="section-3-paragraph-1">
            Dedicated university students committed to sharing their <br />{" "}
            knowledge with future generations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Section3;
