import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import Head from "next/head";
import PostCard from "../../components/PostCard";
import { comment } from "postcss";
import Link from "next/link";
import dayjs from "dayjs";

export default function user() {
  const router = useRouter();
  const username = router.query.username;
  const { data, error } = useSWR<any>(username ? `/users/${username}` : null);
  if (error) router.push("/");

  return (
    <>
      <Head>
        <title>{data?.user.username}</title>
      </Head>
      {data && (
        <div className="container flex pt-5">
          <div className="w-160">
            {data.submissions.map((sub: any) => {
              if (sub.type === "Post") {
                return <PostCard key={sub.identifier} post={sub} />;
              } else {
                return (
                  <div
                    key={sub.identifier}
                    className="flex my-4 bg-white rounded"
                  >
                    <div className="flex-shrink-0 w-10 py-4 text-center rounded-l">
                      <i className="mr-1 text-gray-500 fas fa-comment-alt fa-xs"></i>
                    </div>
                    <div className="w-full p-2">
                      <p className="mb-2 text-xs text-gray-500">
                        {sub.username}
                        <span>
                          {" "}
                          commented on{" "}
                          <Link href={sub.post.url}>
                            <a className="text-blue-500 cursor-pointer hover:underline">
                              {sub.post.title}
                            </a>
                          </Link>
                          <span className="mx-1">•</span>
                          <Link href={`/r/${sub.post.subName}`}>
                            <a className="text-black cursor-pointer hover:underline">
                              /r/{sub.post.subName}
                            </a>
                          </Link>
                        </span>
                      </p>
                      <hr />
                      <p>{sub.body}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="ml-6 w-80">
            <div className="bg-white rounded">
              <div className="p-3 bg-blue-500 rounded-t">
                <img
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                  alt="user profile"
                  className="w-16 h-16 mx-auto border-2 border-white rounded-full"
                />
              </div>
              <div className="p-3 text-center">
                <h1 className="mb-3 text-xl ">{data.user.username}</h1>
                <hr />
                <p className="mt-3">
                  Joined {dayjs(data.user.createdAt).format("MMM YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
