import React from "react";
import "./Button.css";
import classNames from "classnames";

function Button({ state, className, buttonType = "text", ...rest }) {
  let btnClass = classNames(
    "button",
    // { [`button--${state}`]: !!state },
    {
      "button--text": buttonType === "text",
      "button--text-danger": buttonType === "text" && state === "danger",
      "button--text-accept": buttonType === "text" && state === "accept",
      "button--isIcon": buttonType === "icon",
    },
    className
    // ...(state && { [`button--${state}`]: true }),
  );

  return (
    <button className={btnClass} {...rest}>
      {rest.children}
    </button>
  );
}

export default Button;
