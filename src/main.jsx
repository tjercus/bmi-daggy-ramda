import React from "react";
import ReactDOM from "react-dom/client";
import View from "./View.jsx";
import "./index.css";
import { makeBmi } from "./model.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <View bmiCategory={makeBmi(22.4)} />
  </React.StrictMode>
);
