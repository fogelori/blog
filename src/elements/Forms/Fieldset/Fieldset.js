import React from "react";
import classNames from "classnames";
import "./Fieldset.css";

function Fieldset({ children, className, ...rest }) {
  return (
    <fieldset className={classNames("Fieldset", className)} {...rest}>
      {children}
    </fieldset>
  );
}

export default Fieldset;
