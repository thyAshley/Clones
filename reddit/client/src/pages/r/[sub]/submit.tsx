import Axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FormEvent } from "react";
import useSWR from "swr";
import Sidebar from "../../../components/Sidebar";
import { Subs } from "../../../types";

export default function submit() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const router = useRouter();
  const { sub: subName } = router.query;
  const { data: sub, error } = useSWR<Subs>(
    subName ? `/subs/${subName}` : null
  );
  if (error) router.push("/");

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (title.trim() === "") return;

    try {
      const res = await Axios.post("/posts", {
        title: title.trim(),
        body,
        sub: subName,
      });
      router.push(`/r/${sub.name}/${res.data.identifier}/${res.data.slug}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container flex pt-5">
      <Head>
        <title>New Post</title>
      </Head>
      <div className="w-160">
        <div className="p-4 bg-white rounded">
          <h1 className="mb-3 text-lg">Submit a post to /r/{subName}</h1>
          <form onSubmit={submitHandler}>
            <div className="relative mb-2">
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                placeholder="Title"
                maxLength={300}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div
                className="absolute mb-2 text-sm text-gray-500 select-none"
                style={{ top: "10px", right: "10px" }}
              >
                {title.trim().length}/300
              </div>
            </div>
            <textarea
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
              value={body}
              placeholder="Text (Optional)"
              rows={4}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <div className="flex justify-end">
              <button
                className="px-3 py-1 blue button"
                type="submit"
                disabled={!title.trim().length}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
      ){sub && <Sidebar sub={sub} />}
    </div>
  );
}
