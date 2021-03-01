import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import FirebaseContext from "../context/firebase";

const Login = () => {
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  const submitHandler = () => {};

  useEffect(() => {
    document.title = "Login - InstaClone";
  }, []);

  return (
    <div className="container flex items-center h-screen max-w-screen-md mx-auto">
      <div className="flex w-3/5">
        <img src="/images/login.jpg" alt="phone with app" />
      </div>
      <div className="flex flex-col w-2/5">
        <p>Form here</p>
      </div>
    </div>
  );
};

export default Login;
