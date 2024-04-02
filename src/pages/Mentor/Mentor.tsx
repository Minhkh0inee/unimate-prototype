import './mentor.css'
import Section1Mentor from './section1/Section1Mentor.tsx'
import Section2Mentor from "./section2/Section2Mentor.tsx";
const Mentor = () => {
    return (
        <section className="mentor-section-wrapper">
            <Section1Mentor/>
            <Section2Mentor/>
        </section>
    );
};

export default Mentor;
