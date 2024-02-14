import "./Branding.css";
import Brand1 from "../../../assets/brand/image 5.png";
import Brand2 from "../../../assets/brand/image 6.png";
import Brand3 from "../../../assets/brand/image 7.png";
import Brand4 from "../../../assets/brand/image 8.png";

const Branding = () => {
  return (
    <div className="section-wrapper-branding background-blue-bell">
      <div>
        <img src={Brand2} alt="" />
      </div>
      <div>
        <img src={Brand1} alt="" />
      </div>
      <div>
        <img src={Brand3} alt="" />
      </div>
      <div>
        <img src={Brand4} alt="" />
      </div>
    </div>
  );
};

export default Branding;
