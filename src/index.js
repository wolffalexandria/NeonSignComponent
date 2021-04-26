import { StrictMode } from "react";
import ReactDOM from "react-dom";

import NeonSign from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NeonSign flicker={true} text='Alexandria Wolff'/>
  </StrictMode>,
  rootElement
);
