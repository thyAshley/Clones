import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";

import { Header, Sidebar, Feed, Widget, Login } from "./components";
import { auth } from "./components/db";
import { RootState } from "./redux/store";
import { login, logout } from "./redux/users/userSlice";

function App() {
  const { user } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  console.log(user);
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
