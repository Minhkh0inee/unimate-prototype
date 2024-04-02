import "./Section2.css";
import MentorIcon from "../../../assets/icon/Group 30.png";
import Centralizeicon from "../../../assets/icon/Group 29.png";
const Section2 = () => {
  return (
    <section className="container-section-2">
      <div className="title-section-2">
        Unleash Your Potential <span className="nl">With Our Mentorship</span>
      </div>
      <div className="sub-title-section-2">
        We help you excel abroad with mentorship: <br></br> Guidance, support,
        and endless growth.
      </div>

      <div className="benefit-wrapper">
        <div className="benefit-left">
          <div className="benefit-icon-wrapper">
            <img className="benefit-icon" src={MentorIcon} alt="" />
          </div>
          <div className="benefit-title">
            ACTIVE COLLEGE <br></br>MENTORS
          </div>
          <p className="benefit-paragraph">
            Students will be able to chat and schedule private sessions to share
            any questions or concerns.
          </p>
        </div>


        <div className="divider-section-2"></div>

        <div className="benefit-right">
          <div className="benefit-icon-wrapper">
            <img className="benefit-icon" src={Centralizeicon} alt="" />
          </div>
          <div className="benefit-title">
            CENTRALIZED <br></br> INFORMATION HUB
          </div>
          <p className="benefit-paragraph">
            Students will be able to chat and schedule private sessions to share
            any questions or concerns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
