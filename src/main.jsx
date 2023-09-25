import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { routes } from "generouted/react-router";
import { Provider } from "react-redux";
import store from "/src/redux/configureStore";

import "virtual:uno.css";
import "@unocss/reset/tailwind.css";
import Index from "./pages";
import IndexCards from "./pages/cards";
import IndexAddCard from "./pages/addcard";
import Layout, { Loader } from "./pages/_app";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route loader={Loader} element={<Layout />}>
      <Route path="/" element={<Index />} />
      <Route path="/cards" element={<IndexCards />} />
      <Route path="/addcard" element={<IndexAddCard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      {/* <RouterProvider router={createBrowserRouter(routes)}></RouterProvider> */}
    </Provider>
  </React.StrictMode>
);
