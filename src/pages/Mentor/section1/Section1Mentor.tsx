import './section1Mentor.css';
import connectImg from '../../../assets/image/Vector.png'
import connectImg2 from '../../../assets/image/amico5.png'
const Section1Mentor = () => {
    return (
        <section className="section-1-mentor-wrapper">
            <div className="section-1-left">
                <div className="img-wrapper">
                    <img className="img-mentor" src={connectImg} alt=""/>
                </div>
                <div className="mentor-small-title">Mentor Connect</div>
            </div>

            <div className="section-1-right">
            <div className="img-wrapper-2">
                    <img className="img-mentor-2" src={connectImg2} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Section1Mentor;
