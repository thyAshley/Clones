import Head from "next/head";
import Link from "next/link";
import styles from "../styles/register.module.scss";

export default function Register() {
  return (
    <div className="flex">
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`w-36 h-screen ${styles.register__image} bg-cover`}></div>
      <div className="flex flex-col justify-center pl-6">
        <div className="w-72">
          <h1 className="mb-2 text-lg font-medium">Sign up</h1>
          <p className="mb-10 text-xs">
            By continuing, you agree to our User Agreement and Privacy Policy
          </p>
          <form>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 mr-1 cursor-pointer"
                id="agreement"
              />
              <label htmlFor="agreement" className="text-xs cursor-pointer">
                I <span className="text-blue-600">agree</span> to get emails
                from RedditClone
              </label>
            </div>
            <div className="mb-2">
              <input
                type="email"
                className="w-full px-3 py-2 mt-5 mb-2 transition duration-500 border-2 border-gray-300 rounded outline-none bg-gray-50 focus:bg-white hover:bg-white"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full px-3 py-2 mb-2 transition duration-500 border-2 border-gray-300 rounded outline-none bg-gray-50 focus:bg-white hover:bg-white"
                placeholder="Username"
              />
              <input
                type="password"
                className="w-full px-3 py-2 transition duration-500 border-2 border-gray-300 rounded outline-none bg-gray-50 focus:bg-white hover:bg-white"
                placeholder="Password"
              />
            </div>
            <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 rounded">
              Sign Up
            </button>
          </form>
          <small>
            Already a user?
            <Link href="/login">
              <a className="ml-1 text-blue-500 uppercase">Log In</a>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
