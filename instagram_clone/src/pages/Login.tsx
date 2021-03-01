import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import FirebaseContext from "../context/firebase";

const Login = () => {
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.title = "Login - InstaClone";
  }, []);

  return (
    <div className="container flex items-center h-screen max-w-screen-md mx-auto">
      <div className="flex w-3/5">
        <img src="/images/login.jpg" alt="phone with app" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center p-4 mb-4 bg-white border rounded border-gray-primary">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="instaclone"
              className="w-6/12 mt-2 mb-4"
            />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={submitHandler}>
            <input
              onChange={({ target }) => setEmail(target.value)}
              type="text"
              aria-label="Enter your email address"
              placeholder="Email address"
              className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded border-gray-primary text-gray-base"
            />

            <input
              onChange={({ target }) => setPassword(target.value)}
              type="password"
              aria-label="Enter your password"
              placeholder="Password"
              className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded border-gray-primary text-gray-base"
            />

            <button
              disabled={isInvalid}
              type="submit"
              className={`w-full h-8 font-bold text-white bg-blue-500 rounded ${
                isInvalid && "opacity-50"
              }`}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-4 bg-white border border-gray-primary">
          <p className="text-sm">Don't have an account?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
