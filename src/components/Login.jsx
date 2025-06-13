import { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import "./Login.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setErrors({});
      console.log("Form is valid, proceeding towards submission.");
      if (isSignUp) {
        //Sign Up - Creating User Logic

        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            //Signedup
            const user = userCredential.user;
            return updateProfile(user, {
              displayName:
                firstName.current.value + " " + lastName.current.value,
              photoURL: "https://avatars.githubusercontent.com/u/76220506?v=4",
            });
          })
          .then(() => {
            const user = auth.currentUser;
            dispatch(
              addUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            );
          })
          .catch((error) => {
            setErrors({ auth: error.code + " " + error.message });
          });
      } else {
        //Sign In - Logging in User Logic
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            setErrors({ auth: error.code + " " + error.message });
          });
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email.current.value) {
      newErrors.email = "Enter your email address.";
    }

    if (!password.current.value) {
      newErrors.password = "Enter password.";
    } else {
      const passwordError = validatePassword(password.current.value);

      if (passwordError != null) {
        newErrors.password = passwordError;
      }
    }

    if (isSignUp) {
      if (!firstName.current.value.trim()) {
        newErrors.firstName = "Enter your first name.";
      }

      if (!lastName.current.value.trim()) {
        newErrors.lastName = "Enter your last name.";
      }

      if (!confirmPassword.current.value) {
        newErrors.confirmPassword = "Enter password again.";
      } else if (confirmPassword.current.value !== password.current.value) {
        newErrors.confirmPassword = "Passwords don't match";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; //if true, means no errors
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password must be atleast 8 characters long.";
    }

    if (!/(?=.*[a-z])/.test(password)) {
      return "Password must contain atleast one lowercase letter.";
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      return "Password must contain atleast one uppercase letter.";
    }

    if (!/(?=.*\d)/.test(password)) {
      return "Password must contain atleast one number.";
    }

    if (!/(?=.*[@$!%*?&])/.test(password)) {
      return "Password must contain at least one special character.";
    }
    return null;
  };

  return (
    <div className="login">
      <Header />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <p className="login-heading ">{isSignUp ? "Sign Up" : "Sign In"}</p>
          {isSignUp && (
            <div>
              <div>
                <input
                  ref={firstName}
                  type="text"
                  placeholder="First Name"
                ></input>
                {errors.firstName && (
                  <p className="validation-error-message">{errors.firstName}</p>
                )}
              </div>

              <div>
                <input
                  ref={lastName}
                  type="text"
                  placeholder="Last Name"
                ></input>
                {errors.lastName && (
                  <p className="validation-error-message">{errors.lastName}</p>
                )}
              </div>
            </div>
          )}
          <input ref={email} type="email" placeholder="Email Address"></input>
          {errors.email && (
            <p className="validation-error-message">{errors.email}</p>
          )}
          <input ref={password} type="password" placeholder="Password"></input>
          {errors.password && (
            <p className="validation-error-message">{errors.password}</p>
          )}
          {isSignUp && (
            <div>
              <input
                ref={confirmPassword}
                type="password"
                placeholder="Confirm Password"
              ></input>
              {errors.confirmPassword && (
                <p className="validation-error-message">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}

          {errors.auth && (
            <p className="validation-error-message">{errors.auth}</p>
          )}
          <button type="submit" className="login-button">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <div className="signup-text-container">
            <span className="signup-text-static">
              {isSignUp ? "Already a user? " : "New to Netflix? "}
            </span>
            <span className="signup-text-clickable" onClick={handleSignUp}>
              {isSignUp ? "Sign in." : "Sign up."}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
