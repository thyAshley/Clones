import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

import styles from "../styles/register.module.scss";
import InputGroup from "../components/InputGroup";

export default function Register() {
  const [username, setUser] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [agreement, setAgreement] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>({});
  const router = useRouter();

  const submitFormHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/auth", {
        email,
        password,
        username,
      });
      router.push("/login");
    } catch (error) {
      setErrors(error.response.data);
    }
  };
  return (
    <div className="flex bg-white">
      <Head>
        <title>Register</title>
      </Head>

      <div className={`w-36 h-screen ${styles.register__image} bg-cover`}></div>
      <div className="flex flex-col justify-center pl-6">
        <div className="w-72">
          <h1 className="mb-2 text-lg font-medium">Sign up</h1>
          <p className="mb-10 text-xs">
            By continuing, you agree to our User Agreement and Privacy Policy
          </p>

          <form onSubmit={submitFormHandler}>
            <div className="flex items-center mb-5">
              <input
                type="checkbox"
                className="w-4 h-4 mr-1 cursor-pointer"
                id="agreement"
                checked={agreement}
                onChange={({ target }) => setAgreement(target.checked)}
              />
              <label htmlFor="agreement" className="text-xs cursor-pointer">
                I <span className="text-blue-600">agree</span> to get emails
                from RedditClone
              </label>
            </div>
            <InputGroup
              error={errors.email}
              className="mb-2"
              value={email}
              setValue={setEmail}
              placeholder="Email"
              type="email"
            />
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
              className={`w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 rounded ${styles.register__button}`}
              disabled={!agreement}
            >
              Sign Up
            </button>
          </form>
        </div>
        <small>
          Already a user?
          <Link href="/login">
            <a className="ml-1 text-blue-500 uppercase">Log In</a>
          </Link>
        </small>
      </div>
    </div>
  );
}
