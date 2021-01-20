import { useRouter } from "next/router";

const Sub = () => {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1 className="text">Hello</h1>
    </div>
  );
};

export default Sub;
