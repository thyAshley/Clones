import { AppProps } from "next/app";
import Axios from "axios";
import { SWRConfig } from "swr";
import { useRouter } from "next/router";

import "../styles/tailwind.css";
import "../styles/icons.css";

import Navbar from "../components/Navbar";
import { AuthProvider, useAuthState } from "../context/authContext";

Axios.defaults.baseURL = "http://localhost:5000/api";
Axios.defaults.withCredentials = true;

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const authRoutes = ["/register", "/login"];
  const authRoute = authRoutes.includes(pathname);

  return (
    <SWRConfig
      value={{ fetcher: (url) => Axios.get(url).then((res) => res.data) }}
    >
      <AuthProvider>
        {!authRoute && <Navbar />}
        <div className={authRoute ? "" : "pt-12"}>
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </SWRConfig>
  );
}

export default App;
