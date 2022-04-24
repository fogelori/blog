import classNames from "classnames";
import React from "react";
import "./Menu.css";

function Menu(props) {
  const menuClass = classNames("menu__ul", {
    "menu__ul--clicked": props.isOpen,
  });

  return (
    <nav className="menu">
      <ul className={menuClass}>{props.children}</ul>
    </nav>
  );
}

export default Menu;
