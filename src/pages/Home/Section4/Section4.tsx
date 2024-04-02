import "./Section4.css";
import ReviewCardHorizontal from "../../../components/ReviewCardHorizontal/ReviewCardHorizontal";
import data from "../../../data/cardReview.json";
import ChatImage from "../../../assets/image/amico3.png";

const Section4 = () => {
    return (
        <section className="container-section-4">
            <div className="section-4-left">
                <div className="section-4-title">
                    Discover More About <span className="nl">
                    <span className="section-4-bold">Your Mentors</span></span>
                </div>

                <div className="card-group-wrapper">
                    {data.map((item, index) => (
                        <ReviewCardHorizontal
                            key={index}
                            name={item.name}
                            position={item.position}
                            introduction={item.introduction}
                            avatarUrl={item.avatarUrl}
                            cardColor={item.color}
                        />
                    ))}
                </div>
            </div>
            <div className="section-4-right">
                <img className="right-img" src={ChatImage} alt=""/>
            </div>
        </section>
    );
};

export default Section4;
