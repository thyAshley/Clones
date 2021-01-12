import { useSelector } from "react-redux";

import "./App.scss";

import { Header, Sidebar, Feed, Widget, Login } from "./components";

import { selectUser } from "./redux/users/userSlice";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
