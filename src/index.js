import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeContextProvider from "./themeContext";
import "./index.css";
import "@fontsource/open-sans";
import "@fontsource/raleway";

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById("root")
);
