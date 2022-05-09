import classNames from "classnames";
import React from "react";
import { Fieldset, Legend } from "src/elements/Forms";
import "./ListBox.css";

function ListBox(props) {
  return (
    <Fieldset className={classNames("ListBox", props.className)}>
      <Legend className="ListBox__title">Category</Legend>
      <select
        className="ListBox__select"
        value={props.value}
        onChange={props.onChange}
      >
        {props.children}
      </select>
    </Fieldset>
  );
}

export default ListBox;
