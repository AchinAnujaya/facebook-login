import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import LoginForm from "./components/LoginForm";
import "./index.css";
import Sidetext from "./components/Sidetext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
