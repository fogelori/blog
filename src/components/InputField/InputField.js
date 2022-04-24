// based on
// https://freefrontend.com/css-input-text/
// https://codepen.io/lucasyem/pen/ZEEYKdj

import React from "react";
import isObject from "../../tools/isObject";
import "./InputField.css";

function InputField(props) {
  return (
    <div className="field">
      <input
        className="field__input"
        placeholder={props.placeholder}
        onChange={props.onChange}
        name="name"
        id={`${props.id}`}
        value={
          isObject(props.value) ? props.value?.[props.id] || "" : props.value
        }
        type={props.type || "text"}
        required={props.required}
      />
      <label htmlFor={`${props.id}`} className="field__label">
        {props.placeholder}
      </label>
    </div>
  );
}

export default InputField;

// using the following code
// https://codepen.io/lucasyem/pen/ZEEYKdj
