import React from "react";
import Link from "next/link";

import RedditLogo from "../../public/reddit_logo.svg";

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex items-center justify-center h-12 px-5 bg-white">
      <div className="flex items-center">
        <Link href="/">
          <a>
            <RedditLogo className="w-8 h-8 mr-2" />
          </a>
        </Link>
        <span className="text-2xl font-semibold">
          <Link href="/">Clonedit</Link>
        </span>
      </div>

      <div className="flex items-center mx-auto bg-gray-100 border rounded hover:border-blue-500 hover:bg-white ">
        <i className="pl-4 pr-3 text-gray-500 fas fa-search"></i>
        <input
          type="text"
          className="py-1 pr-3 bg-transparent rounded outline-none w-140 active:bg-blue-400"
          placeholder="Search"
        />
      </div>
      <div className="flex">
        <Link href="/login">
          <a className="w-32 py-1 mr-5 leading-6 button blue-hollow">Log in</a>
        </Link>
        <Link href="/register">
          <a className="w-32 py-1 leading-6 button blue">Register</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
