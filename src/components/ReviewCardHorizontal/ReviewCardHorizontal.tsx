import "./ReviewCardHorizontal.css";

interface Props {
  name: string;
  position: string;
  introduction: string;
  cardColor: string;
  avatarUrl: string;
}

const ReviewCardHorizontal = ({
  name,
  position,
  introduction,
  cardColor,
  avatarUrl,
}: Props) => {
  return (
    <div className="review-card-horizontal-base">
      <div
        className="review-card-horizontal-main"
        style={{ background: cardColor }}
      >
        <div className="review-card-horizontal-content">
          <div className="name">{name}</div>
          <div className="position">{position}</div>
          <p className="introduction">" {introduction} "</p>
        </div>
      </div>
      <div className="review-card-horizontal-avatar">
        <img loading="lazy" src={avatarUrl} alt="avatar" className="avatar" />
      </div>
    </div>
  );
};

export default ReviewCardHorizontal;
