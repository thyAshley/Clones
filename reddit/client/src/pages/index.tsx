import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { Post } from "../../types";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchAllPost = async () => {
      try {
        const response = await axios.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchAllPost();
  }, []);

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
                    <img
                      src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                      className="w-6 h-6 mr-1 rounded-full cursor-pointer"
                    />
                  </Link>
                  <Link href={"/r/${post.subName"}>
                    <a className="text-xs font-bold hover:underline">
                      /r/{post.subName}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
