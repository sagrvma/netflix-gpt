import { netflixHeaderLogo } from "../utils/imageURLS";
import "./Header.css";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };

  return (
    <div className="header">
      <img src={netflixHeaderLogo} className="header-logo" />
      {user && (
        <button className="signout-button" onClick={handleLogOut}>
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
