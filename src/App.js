import React from "react";
import "./styles.css";

const NeonSign = ({ flicker, text }) => {
  return (
    <h1 id="neonsign" className={flicker === true ? "flicker" : ""}>
      {text}
    </h1>
  );
};

export default NeonSign;
