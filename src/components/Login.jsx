import Header from "./Header";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <Header />
      <div className="login-container">
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <p>Sign In</p>
          <input
            type="email"
            placeholder="Email Address"
            className="login-email-input"
            required
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="login-password-input"
            required
          ></input>
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
