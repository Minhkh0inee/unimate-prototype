import "./Home.css";
import Section1 from "./section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Branding from "./Branding/Branding";


const Home = () => {


  return (
    <>
      <div className="section-wrapper-home">
        <Section1 />
      </div>
      <Branding />
      <div className="section-wrapper-home">
        <Section2 />
      </div>
      <Section3></Section3>
      <div className="section-wrapper-home">
        <Section4 />
        <Section5 />
      </div>
    </>
  );
};

export default Home;
