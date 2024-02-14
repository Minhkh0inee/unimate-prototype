import "./Section1.css";
import Amico from "../../../assets/image/amico.png";
import ButtonRedirectOutline from "../../../components/ButtonRedirectOutline/ButtonRedirectOutline";
import ButtonRedirectFill from "../../../components/ButtonRedirectFill/ButtonRedirectFill";

const Setion1 = () => {
  return (
    <section className="container">
      <div className="left-section-1">
        <div className="title-section1">
          Discover Your Ideal
          <span className="title-bold"> Overseas Mentor Today!</span>
        </div>
        <div className="sub-title-section-1">
          Guiding Your Global Journey: Connect with Expert Mentors for Overseas
          Education Success
        </div>

        <div className="btn-section-1-wrapper">
          <ButtonRedirectFill text="CONNECT MENTOR" url=""></ButtonRedirectFill>

          <ButtonRedirectOutline
            text="SIGN UP"
            url="/signin"
          ></ButtonRedirectOutline>
        </div>
      </div>
      <div className="right-section-1">
        <img src={Amico} alt="" className="img-section-1" />
      </div>
    </section>
  );
};

export default Setion1;
