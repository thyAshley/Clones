import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

import styles from "../styles/register.module.scss";
import InputGroup from "../components/InputGroup";

export default function Login() {
  const [username, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<any>({});
  const router = useRouter();

  const submitFormHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/auth/login", {
        password,
        username,
      });
      router.push("/");
    } catch (error) {
      setErrors(error.response.data);
    }
  };
  return (
    <div className="flex">
      <Head>
        <title>Login</title>
      </Head>

      <div className={`w-36 h-screen ${styles.register__image} bg-cover`}></div>
      <div className="flex flex-col justify-center pl-6">
        <div className="w-72">
          <h1 className="mb-2 text-lg font-medium">Login</h1>
          <p className="mb-10 text-xs">
            By continuing, you agree to our User Agreement and Privacy Policy
          </p>

          <form onSubmit={submitFormHandler}>
            <InputGroup
              error={errors.username}
              className="mb-2"
              value={username}
              setValue={setUser}
              placeholder="Username"
              type="text"
            />
            <InputGroup
              error={errors.password}
              className="mb-4"
              value={password}
              setValue={setPassword}
              placeholder="Password"
              type="password"
            />

            <button
              className={`w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 rounded`}
            >
              Login
            </button>
          </form>
        </div>
        <small>
          Don't have an account?
          <Link href="/register">
            <a className="ml-1 text-blue-500 uppercase">Sign Up</a>
          </Link>
        </small>
      </div>
    </div>
  );
}
