import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import moment from "moment";

import { Post } from "../../types";
import { GetServerSideProps } from "next";

export default function Home({ posts }) {
  return (
    <div className="pt-12">
      <Head>
        <title>Clonedit: The Reddit Clone</title>
      </Head>
      <h3>Recent post</h3>
      <div className="container flex pt-4">
        {/* Render Post */}
        <div className="w-140">
          {posts.map((post) => (
            <div key={post.identifier} className="flex mb-4 bg-white rounded">
              {/* Vote Section */}
              <div className="w-10 text-center bg-gray-200 rounded-l">
                <p>V</p>
              </div>
              <div className="w-full p-2">
                <div className="flex items-center">
                  <Link href={`/r/${post.subName}`}>
                    <Fragment>
                      <img
                        src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                        className="w-6 h-6 mr-1 rounded-full cursor-pointer"
                      />
                      <a className="text-xs font-bold cursor-pointer hover:underline">
                        /r/{post.subName}
                      </a>
                    </Fragment>
                  </Link>
                  <p className="text-xs text-gray-600">
                    <span className="mx-1">•</span>
                    Posted by{" "}
                    <Link href={`/u/${post.username}`}>
                      <a className="mx-1 hover:underline">/u/{post.username}</a>
                    </Link>
                    <Link href={post.url}>
                      <a className="mx-1 hover:underline">
                        {moment(post.createdAt).fromNow()}
                      </a>
                    </Link>
                  </p>
                </div>
                <Link href={post.url}>
                  <a className="my-2 text-lg font-medium">{post.title}</a>
                </Link>
                {post.body && <p className="my-2 text-sm">{post.body}</p>}
                <div className="flex">
                  <Link href={post.url}>
                    <a>
                      <div className="px-2 mr-2 text-xs text-gray-500 rounded cursor-pointer hover:bg-gray-200">
                        <i className="mr-2 fas fa-comment-alt fa-xs"></i>
                        <span>500 Comments</span>
                      </div>
                    </a>
                  </Link>
                  <div className="px-2 mr-2 text-xs text-gray-500 rounded cursor-pointer hover:bg-gray-200">
                    <i className="mr-2 fas fa-share fa-xs"></i>
                    <span>Share</span>
                  </div>
                  <div className="px-2 mr-2 text-xs text-gray-500 rounded cursor-pointer hover:bg-gray-200">
                    <i className="mr-2 fas fa-bookmark fa-xs"></i>
                    <span>Bookmark</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await axios.get("/posts");
    return {
      props: {
        posts: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "Something went wrong",
      },
    };
  }
};
