import React, { useState } from "react";

import "./styles.scss";

import { auth } from "../db";
import { useDispatch } from "react-redux";
import { login } from "../../redux/users/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const registerHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter a full name");
    }
    try {
      const user = (await auth.createUserWithEmailAndPassword(email, password))
        .user;
      if (user) {
        await user.updateProfile({
          displayName: name,
          photoURL: profile,
        });

        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: name,
            photoURL: profile,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const user = (await auth.signInWithEmailAndPassword(email, password))
        .user;
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt="LinkedIn"
      />
      <form>
        <input
          placeholder="Full name (required if registering)"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          placeholder="Profile pic URL"
          type="text"
          onChange={(e) => setProfile(e.target.value)}
          value={profile}
        />
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" onClick={loginHandler}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={registerHandler}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
