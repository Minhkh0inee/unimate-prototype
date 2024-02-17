import "./Header.css";
import UnimateLogo from "../assets/image/UniMate-Logo-05 1.png";
import ButtonRedirectOutline from "../components/ButtonRedirectOutline/ButtonRedirectOutline";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("");
  };

  const navigateToBlog = () => {
    navigate("/blog");
  };

  return (
    <div className="header-section">
      <div className="header-wrapper">
        <div className="logo-wrapper" onClick={navigateToHome}>
          <img src={UnimateLogo} alt="" />
          <span className="header-title">
            <i>
              Uni<span className="header-title-bold color-blue-bell">Mate</span>
            </i>
          </span>
        </div>
        <div className="menu">
          <div className="menu-item">About</div>
          <div className="menu-item" onClick={navigateToBlog}>
            Blog
          </div>

          <div className="menu-item">Contact</div>
          <div className="menu-item">
            <a href="/signup" style={{ textDecoration: "none" }}>
              Sign Up
            </a>
          </div>
          <div>
            <ButtonRedirectOutline text="Sign In" url="/signin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
