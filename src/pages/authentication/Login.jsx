import "./authentication.css";
import { Navbar } from "../../components";

export default function Login() {
  return (
      <>
      <Navbar/>
    <main className="main-container flex ai-start jc-center">
      <form className="authentication-container flex flex-column ai-left p-md2 m-xs">
        <h1 className="title m-s m-rl0 fs-3 fw-600">Log in</h1>
        <div className="input-wrapper m-xxxs m-rl0">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="johndoe@gmail.com"
            className="input p-xxs m-xxs m-rl0 bd-rad-sm"
          />
          <label className="success-msg m-xxs m-rl0">
            Success! Email entered is correct.
          </label>
        </div>
        <div className="input-wrapper m-xxxs m-rl0">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="input p-xxs m-xxs m-rl0 bd-rad-sm"
            type="password"
            placeholder="password"
          />
          <label className="error-msg m-xxs m-rl0">
            Wrong Password. Try again.
          </label>
        </div>
        <button type="submit" className="btn btn-primary m-xxs m-rl0">
          LOGIN
        </button>
        <p className="m-xxs m-rl0 center-align-text gray-text">
          New User?{" "}
          <a className="primary-color-text" href="/pages/signup/signup.html">
            Sign Up!
          </a>
          .
        </p>
        <a href="" className="primary-color-text center-align-text m-xxs m-rl0">
          Use Guest Credentials.
        </a>
      </form>
    </main>
    </>
  );
}
