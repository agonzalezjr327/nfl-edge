import React from "react";

import ReactDOM
  from "react-dom/client";

import {
  BrowserRouter
} from "react-router-dom";

import {
  Provider
} from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "bootstrap-icons/font/bootstrap-icons.css";

import "react-toastify/dist/ReactToastify.css";

import "./index.css";

import App from "./App";

import {
  store
} from "./app/store";


ReactDOM
  .createRoot(
    document.getElementById("root")
  )
  .render(

    <React.StrictMode>

      <Provider store={store}>

        <BrowserRouter>

          <App />

        </BrowserRouter>

      </Provider>

    </React.StrictMode>

  );