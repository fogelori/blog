import React from "react";
import classNames from "classnames";
import "./Legend.css";

function Legend({ children, className, ...rest }) {
  return (
    <legend className={classNames("Legend", className)} {...rest}>
      {children}
    </legend>
  );
}

export default Legend;
