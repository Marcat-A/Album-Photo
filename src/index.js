import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LangProvider } from "./lang/context/langContext";

import "./styles/index.scss";

ReactDOM.render(
  <LangProvider>
    <App />
  </LangProvider>,
  document.getElementById("root")
);
