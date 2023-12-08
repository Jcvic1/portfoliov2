import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/main.css";
import "./stylesheets/normalize.css";
import './app/utility/i18n';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
