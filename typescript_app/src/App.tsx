import React from "react";
import { Provider } from "react-redux";
import RepositoriesList from "./props/RepositoriesList";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a repository</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
