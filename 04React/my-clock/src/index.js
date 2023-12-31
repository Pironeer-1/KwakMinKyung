import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Clock from "./Clock";

const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
});
