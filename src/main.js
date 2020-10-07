import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";

ReactDOM.render(
  React.createElement(Button, { text: "abc" }),
  document.getElementById("app")
);
