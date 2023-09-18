import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "generouted/react-router";

import 'virtual:uno.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
  </React.StrictMode>
);
