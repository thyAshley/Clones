import Axios from "axios";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuthDispatch, useAuthState } from "../context/authContext";

import RedditLogo from "../images/reddit.svg";
import { Subs } from "../types";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const [name, setName] = useState("");
  const [subs, setSubs] = useState<Subs[]>([]);
  const [timer, setTimer] = useState(null);

  const router = useRouter();

  const dispatch = useAuthDispatch();
  const { authenticated, loading } = useAuthState();

  const logout = async () => {
    await axios.get("/auth/logout");
    dispatch({ type: "LOGOUT" });
    window.location.reload();
  };

  const searchSubs = async () => {
    clearTimeout(timer);
    setTimer(
      setTimeout(async () => {
        try {
          const { data } = await Axios.get(`/subs/search/${name}`);
          setSubs(data);
        } catch (error) {
          console.log(error);
        }
      }, 600)
    );
  };

  useEffect(() => {
    if (!name.trim()) {
      setSubs([]);
      return;
    }
    searchSubs();
  }, [name]);
  return (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between h-12 px-5 bg-white">
      {/* Logo and title */}
      <div className="flex items-center">
        <Link href="/">
          <a>
            <RedditLogo className="w-8 h-8 mr-2" />
          </a>
        </Link>
        <span className="hidden text-2xl font-semibold lg:block">
          <Link href="/">readit</Link>
        </span>
      </div>
      {/* Serach Input */}
      <div className="max-w-full px-4 w-96 lg:max-w-full">
        <div className="relative flex items-center mx-auto bg-gray-100 border rounded hover:border-blue-500 hover:bg-white">
          <i className="pl-4 pr-3 text-gray-500 fas fa-search "></i>
          <input
            type="text"
            className="py-1 pr-3 bg-transparent rounded w-160 focus:outline-none"
            placeholder="Search"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div
            className="absolute left-0 right-0 bg-white"
            style={{ top: "100%" }}
          >
            {subs.length > 0 &&
              subs.map((sub) => (
                <div
                  className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    router.push(`/r/${sub.name}`);
                    setSubs([]);
                  }}
                >
                  <div>
                    <Image
                      className="mr-4 overflow-hidden rounded-full"
                      src={sub.imageUrl}
                      alt="Sub"
                      height={30}
                      width={30}
                    />
                  </div>
                  <div className="ml-4 text-sm">
                    <p className="font-medium">{sub.name}</p>
                    <p className="text-gray-600">{sub.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* Auth buttons */}
      <div className="flex">
        {!loading &&
          (authenticated ? (
            <button
              className="hidden w-20 py-1 mr-4 leading-5 lg:w-32 hollow blue button sm:block"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link href="/login">
                <a className="hidden w-20 py-1 mr-4 leading-5 lg:w-32 hollow blue button sm:block">
                  log in
                </a>
              </Link>
              <Link href="/register">
                <a className="hidden w-20 py-1 leading-5 lg:w-32 blue button sm:block">
                  sign up
                </a>
              </Link>
            </>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
