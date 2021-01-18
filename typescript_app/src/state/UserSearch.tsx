import React, { useRef, useState, useEffect } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [search, setSearch] = useState<string>("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, [inputRef]);

  const searchHandler = () => {
    const foundUser = users.find((user) => user.name === search);
    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input
        ref={inputRef}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>{user && user.name}</div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default UserSearch;
