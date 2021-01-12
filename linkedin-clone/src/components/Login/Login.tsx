import React from "react";

import "./styles.scss";

const Login = () => {
  const login = () => {};

  const register = () => {};
  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt="LinkedIn"
      />
      <form>
        <input placeholder="Full name (required if registering)" type="text" />
        <input placeholder="Profile pic URL" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit" onClick={login}>
          Sign In
        </button>
      </form>
      <p>
        Not a member? <span className="login__register">Register Now</span>
      </p>
    </div>
  );
};

export default Login;
