import { useState } from "react";
import Header from "./Header";
import "./Login.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="login">
      <Header />
      <div className="login-container">
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <p className="login-heading ">{isSignUp ? "Sign Up" : "Sign In"}</p>
          {isSignUp && (
            <div>
              <input type="text" placeholder="First Name" required></input>
              <input type="text" placeholder="Last Name" required></input>
            </div>
          )}
          <input type="email" placeholder="Email Address" required></input>
          <input type="password" placeholder="Password" required></input>
          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
            ></input>
          )}
          <button type="submit" className="login-button">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <p onClick={handleSignUp} className="signup-text">
            {isSignUp
              ? "Already a user? Sign In now."
              : "New to Netflix? Sign up now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
