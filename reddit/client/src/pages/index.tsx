import { Fragment } from "react";
import useSWR from "swr";
import Head from "next/head";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import PostCard from "../components/PostCard";
import { Post, Subs } from "../types";
import Link from "next/link";
import { useAuthState } from "../context/authContext";

dayjs.extend(relativeTime);

export default function Home() {
  const { data: posts } = useSWR<Post[]>("/posts");
  const { data: topSubs } = useSWR<Subs[]>("/misc/top-subs");

  const { authenticated } = useAuthState();

  return (
    <Fragment>
      <Head>
        <title>readit: the front page of the internet</title>
      </Head>
      <div className="container flex pt-4">
        {/* Posts feed */}
        <div className="w-160">
          {posts?.map((post) => (
            <PostCard post={post} key={post.identifier} />
          ))}
        </div>
        {/* Sidebar */}
        <div className="ml-6 w-80">
          <div className="bg-white rounded">
            <div className="p-4 border-b-2">
              <p className="text-lg font-semibold text-center">
                Top Communities
              </p>
              <div>
                {topSubs?.map((sub) => (
                  <div
                    key={sub.name}
                    className="flex items-center px-4 py-2 text-xs border-b"
                  >
                    <div className="mr-3 cursor-pointer">
                      <Link href={`/r/${sub.name}`}>
                        <a>
                          <Image
                            src={sub.imageUrl}
                            className="rounded-full"
                            alt="top subs"
                            width={35}
                            height={35}
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href={`/r/${sub.name}`}>
                      <a className="font-bold hover:cursor-pointer">
                        /r/{sub.name}
                      </a>
                    </Link>
                    <p className="ml-auto font-med">{sub.postcount}</p>
                  </div>
                ))}
              </div>
              {authenticated && (
                <div className="p-4 border-t-2">
                  <Link href="/subs/create">
                    <a className="w-full px-2 py-1 blue button">
                      Create COmmunity
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     const res = await Axios.get('/posts')

//     return { props: { posts: res.data } }
//   } catch (err) {
//     return { props: { error: 'Something went wrong' } }
//   }
// }
