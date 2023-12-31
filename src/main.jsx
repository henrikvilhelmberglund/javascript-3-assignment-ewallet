import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { routes } from "generouted/react-router";
import {Routes}  from "./routes"
import { Provider } from "react-redux";
import store from "/src/redux/configureStore";

import "virtual:uno.css";
import "@unocss/reset/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>
);
