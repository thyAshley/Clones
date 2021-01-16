import { AppProps } from "next/app";
import axios from "axios";

import "../styles/globals.scss";

import Navbar from "../components/Navbar";
import { Fragment } from "react";
import { useRouter } from "next/router";

axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const authRoute = ["/register", "/login"].includes(pathname);
  return (
    <Fragment>
      {!authRoute && <Navbar />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
