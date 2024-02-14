import "./Footer.css";
import UnimateLogo from "../assets/image/UniMate-Logo-08 1.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-wrapper">
        <div className="footer-wrapper-left">
          <div className="logo-wrapper">
            <img src={UnimateLogo} alt="" />
            <span className="footer-title">
              <i>
                Uni
                <span className="footer-title-bold color-blue-bell">Mate</span>
              </i>
            </span>
          </div>

          <p className="footer-introduction">
            Navigate Your Overseas Journey with Expert Mentorship <br></br>{" "}
            UniMate. Connect with dedicated mentors for your <br></br>{" "}
            international education adventure.
          </p>

          <div className="footer-copyright">© 2024 UNIMATE</div>
        </div>

        <div className="footer-wrapper-right">
          <div className="footer-menu-wrapper">
            <div className="footer-menu">
              <div className="footer-menu-header">Contact Us</div>
              <div className="footer-menu-item">Terms of Service</div>
              <div className="footer-menu-item">Privacy</div>
            </div>
            <div className="footer-menu">
              <div className="footer-menu-header">Resource</div>
              <div className="footer-menu-item">Blog</div>
              <div className="footer-menu-item">UniCall</div>
              <div className="footer-menu-item">FAQ</div>
            </div>
          </div>

          <div className="icon-wrapper">
            <FaEnvelope className="footer-icon" />
            <FaSquareFacebook className="footer-icon" />
            <RiInstagramFill className="footer-icon" />
            <FaLinkedin className="footer-icon" />
            <FaSquareXTwitter className="footer-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
