import React, { useState } from "react";
import { useAction } from "../hooks/useAction";
import { useTypeSelector } from "../hooks/useTypeSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const { searchRepository } = useAction();
  const { data, error, loading } = useTypeSelector((state) => state.repository);

  const onSearchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepository(term);
  };

  return (
    <div>
      <form onSubmit={onSearchHandler}>
        <input
          type="text"
          value={term}
          onChange={({ target }) => setTerm(target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
