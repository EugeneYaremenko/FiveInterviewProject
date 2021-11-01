import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store";

import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDUiQxCbjtdQd5OSINtLdTmOMDi4Ykc0PU",
  authDomain: "interview-project-five-s-fbec6.firebaseapp.com",
  projectId: "interview-project-five-s-fbec6",
  storageBucket: "interview-project-five-s-fbec6.appspot.com",
  messagingSenderId: "217825252373",
  appId: "1:217825252373:web:e3a4ba69ab1b40377faa1c",
  measurementId: "G-2LY3WM3BLB",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
