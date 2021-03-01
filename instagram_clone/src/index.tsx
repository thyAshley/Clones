import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { FieldValue, firebase } from "./lib/firebase";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FirebaseContext.Provider value={{ firebase, FieldValue }}>
        <App />
      </FirebaseContext.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
