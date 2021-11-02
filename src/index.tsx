import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import ErrorBoundary from "./services/ErrorBoundary";

firebase.initializeApp({
  apiKey: "AIzaSyDUiQxCbjtdQd5OSINtLdTmOMDi4Ykc0PU",
  authDomain: "interview-project-five-s-fbec6.firebaseapp.com",
  projectId: "interview-project-five-s-fbec6",
  storageBucket: "interview-project-five-s-fbec6.appspot.com",
  messagingSenderId: "217825252373",
  appId: "1:217825252373:web:e3a4ba69ab1b40377faa1c",
  measurementId: "G-2LY3WM3BLB",
});

export const Context = createContext<any | null>(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Provider store={store}>
    <Context.Provider
      value={{
        firebase,
        auth,
        firestore,
      }}
    >
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Context.Provider>
  </Provider>,
  document.getElementById("root")
);
