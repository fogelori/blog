import React from "react";
import classNames from "classnames";
import "./H1.css";

function H1({ children, className, ...rest }) {
  return (
    <h1 className={classNames("H1", className)} {...rest}>
      {children}
    </h1>
  );
}

export default H1;
