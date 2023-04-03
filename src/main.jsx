import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import App from "./App";
import "./index.css";
import ReactGA from "react-ga";

const TRACKING_ID = "G-JTTSGCCD1B";

ReactGA.initialize(TRACKING_ID);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
