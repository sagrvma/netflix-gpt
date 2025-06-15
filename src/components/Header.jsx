import { netflixHeaderLogo } from "../utils/constants";
import "./Header.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  // console.log(user);

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

  useEffect(() => {
    //this was earlier in app.jsx, but the navigate was a problem
    //added this here as the header will pe present all through the app, so this is a good place for this
    //alt try moving routing up one component so we wont have to put this here
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //onAuthStateChange by firebase returns an unsubscribe fx
      if (user) {
        //User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="header">
      <img src={netflixHeaderLogo} className="header-logo" />
      {user && (
        <div className="user-nav">
          <img className="user-photo" src={user.photoURL} />
          <button className="signout-button" onClick={handleLogOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
