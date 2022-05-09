import React from "react";
import classNames from "classnames";
import "./H2.css";

function H2({ children, className, ...rest }) {
  return (
    <h2 className={classNames("H2", className)} {...rest}>
      {children}
    </h2>
  );
}

export default H2;
