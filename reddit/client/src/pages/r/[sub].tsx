import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import PostCard from "../../components/PostCard";
import { Post, Subs } from "../../types";
import { useAuthState } from "../../context/authContext";
import classNames from "classnames";
import { ChangeEvent } from "react";
import Axios from "axios";

const Sub = () => {
  const [ownSub, setOwnSub] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>();
  const router = useRouter();
  const subName = router.query.sub;

  const { authenticated, user } = useAuthState();

  const { data: sub, error, revalidate } = useSWR<Subs>(
    subName ? `/subs/${subName}` : null
  );

  useEffect(() => {
    if (!sub) return;
    setOwnSub(authenticated && user.username === sub.username);
  }, [sub]);

  let markup: any;
  if (!sub) {
    markup = <p className="text-lg text-center">Loading...</p>;
  } else if (sub.posts.length === 0) {
    markup = <p className="text-lg text-center">No posts submitted yet</p>;
  } else {
    markup = sub.posts.map((post: Post) => (
      <PostCard key={post.identifier} post={post} />
    ));
  }

  if (error) router.push("/");

  const openFileInput = (type: string) => {
    if (!ownSub) return;
    fileInputRef.current.name = type;
    fileInputRef.current.click();
  };

  const uploadImageHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", fileInputRef.current.name);

    try {
      await Axios.post(`/subs/${sub.name}/image`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      revalidate();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <Head>
          <title>{sub?.title}</title>
        </Head>
      </div>
      {sub && (
        <>
          <input
            type="file"
            hidden
            ref={fileInputRef}
            onChange={uploadImageHandler}
          />
          <div>
            <div
              onClick={() => openFileInput("banner")}
              className={classNames("bg-blue-500", {
                "cursor-pointer": ownSub,
              })}
            >
              {sub.bannerUrl ? (
                <div
                  className="h-56 bg-blue-500"
                  style={{
                    backgroundImage: `url(${sub.bannerUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              ) : (
                <div className="h-20 bg-blue-500"></div>
              )}
            </div>
          </div>

          <div className="h-20 bg-white">
            <div className="container relative flex">
              <div className="absolute" style={{ top: -15 }}>
                <Image
                  src={sub.imageUrl}
                  alt="Subs"
                  className={classNames("rounded-full", {
                    "cursor-pointer": ownSub,
                  })}
                  width={60}
                  height={60}
                  onClick={() => openFileInput("image")}
                />
              </div>
              <div className="pt-2 pl-24">
                <div className="flex items-center">
                  <h1 className="mb-1 text-3xl font-bold">{sub.title}</h1>
                </div>
                <p className="text-sm font-bold text-gray-500">/r/{sub.name}</p>
              </div>
            </div>
          </div>
          <div className="container flex pt-5">
            <div className="w-160">{markup}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Sub;
