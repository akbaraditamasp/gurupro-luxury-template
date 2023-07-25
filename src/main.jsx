import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

let router = createBrowserRouter(routes);

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);
