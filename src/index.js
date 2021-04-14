import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./assets/styles/global";
import ColorsProvider from "./assets/styles/ColorsProvider";

ReactDOM.render(
  <React.StrictMode>
    <ColorsProvider>
      <GlobalStyle />
      <App />
    </ColorsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
