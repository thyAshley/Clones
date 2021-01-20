import { useRouter } from "next/router";
import useSWR from "swr";
import PostCard from "../../components/PostCard";
import { Post } from "../../types";

const Sub = () => {
  const router = useRouter();
  const subName = router.query.sub;

  const { data: sub, error } = useSWR(subName ? `/subs/${subName}` : null);

  let markup;
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

  return (
    <div className="container flex pt-5">
      {sub && <div className="w-160">{markup}</div>}
    </div>
  );
};

export default Sub;
