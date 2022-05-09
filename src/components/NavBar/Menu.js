import classNames from "classnames";
import React from "react";
import "./Menu.scss";

function Menu(props) {
  const menuClass = classNames("menu", {
    "menu--clicked": props.isOpen,
  });

  return <ul className={menuClass}>{props.children}</ul>;
}

export default Menu;
