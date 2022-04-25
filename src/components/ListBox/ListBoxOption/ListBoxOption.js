import classNames from "classnames";
import React from "react";

function ListBoxOption(props) {
  return (
    <option
      className={classNames("ListBoxOption", props.className)}
      value={props.value}
    >
      {props.children}
    </option>
  );
}

export default ListBoxOption;
