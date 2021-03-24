import React from "react";
import "./styles.css";

const NeonSign = ({ flicker }) => {
  return (
    <h1 id="neonsign" className={flicker === true ? "flicker" : ""}>
      Alexandria Wolff
    </h1>
  );
};

export default NeonSign;
