import { netflixHeaderLogo } from "../utils/imageURLS";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={netflixHeaderLogo} className="header-logo" />
    </div>
  );
};

export default Header;
