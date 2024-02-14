import "./ReviewCardVertical.css";
import Avatar1 from "../../assets/image/avatar1.jpg";

const ReviewCardVertical = () => {
  return (
    <div className="review-card-vertical">
      <div className="review-card-avatar-wrapper">
        <img src={Avatar1} alt="" className="review-card-avatar" />
      </div>
      <div className="review-card-vertical-name">Oliva Cole</div>
      <div className="review-card-vertical-introduction">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        accusamus veniam impedit eum ipsum itaque assumenda placeat omnis? Aut
        sequi
      </div>
    </div>
  );
};

export default ReviewCardVertical;
