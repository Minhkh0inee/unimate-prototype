import "./Section5.css";
import ReviewCardVertical from "../../../components/ReviewCardVertical/ReviewCardVertical";

const Section5 = () => {
  return (
    <>
      <section className="container-section-5">
        <div className="section-5-sub-title color-blue-bell">TESTIMONIALS</div>
        <div className="section-5-title">
          Read What Others <br></br>Have To Say
        </div>

        <div className="section-5-review-card-wrapper">
          <ReviewCardVertical />
          <ReviewCardVertical />
          <ReviewCardVertical />
        </div>
      </section>

      <section className="get-started-section">
        <div className="get-started-sub-title">ARE YOU READY?</div>
        <div className="get-started-title">
          Navigate Abroad <br></br> Thrive Together
        </div>

        <button className="btn-get-started">GET STARTED</button>
      </section>
    </>
  );
};

export default Section5;
