import Axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { User } from "../types";

interface authState {
  authenticated: boolean;
  user: User | undefined;
  loading: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

const authContext = createContext<authState>({
  authenticated: false,
  user: null,
  loading: true,
});

const dispatchContext = createContext(null);

const reducer = (state: authState, { type, payload }: Action) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        authenticated: true,
        user: payload,
      };
    case "LOGOUT":
      return {
        ...state,
        authenticated: false,
        user: null,
      };
    case "STOP_LOADING":
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
        loading: true,
      };
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    authenticated: false,
    loading: true,
  });

  useEffect(() => {
    Axios.get("/auth/me")
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.data });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch({ type: "STOP_LOADING" });
      });
  }, []);

  return (
    <dispatchContext.Provider value={dispatch}>
      <authContext.Provider value={state}>{children}</authContext.Provider>
    </dispatchContext.Provider>
  );
};

export const useAuthState = () => useContext(authContext);
export const useAuthDispatch = () => useContext(dispatchContext);
