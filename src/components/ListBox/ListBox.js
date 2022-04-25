import classNames from "classnames";
import React from "react";
import "./ListBox.css";

function ListBox(props) {
  return (
    <fieldset className={classNames("ListBox", props.className)}>
      <legend className="ListBox__title">Category</legend>
      <select
        className="ListBox__select"
        value={props.value}
        onChange={props.onChange}
      >
        {props.children}
      </select>
    </fieldset>
  );
}

export default ListBox;
