// a good example why we need Button component
// https://www.pluralsight.com/guides/wrap-a-custom-react.js-component-for-an-html-button

import React from "react";
// import "./Button.css";

function Button({ state, ...rest }) {
  const buttonStateFunction = (buttonState) => {
    switch (buttonState) {
      case "regular":
        return " button--regular";
      case "danger":
        return " button--danger";
      default:
        return " button--regular";
    }
  };
  const buttonState = buttonStateFunction(state);
  return (
    <button {...rest} className={`button${buttonState}`}>
      {rest.children}
    </button>
  );
}

export default Button;
