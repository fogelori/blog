import classNames from "classnames";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Menuitem.css";

function MenuItem(props) {
  let location = useLocation();
  // console.log(window.innerWidth);
  return (
    <li
      className={classNames("menuItem", {
        "menuItem--clicked": props.isOpen,
      })}
    >
      <NavLink
        to={props.linkPath}
        className={({ isActive }) =>
          classNames("menuItem__link", {
            "menuItem__link--active": isActive,
            "menuItem__link--clicked": props.isOpen,
          })
        }
        onClick={props.onClick}
        state={props.type === "modal" && { backgroundLocation: location }}
      >
        {props.name}
      </NavLink>
    </li>
  );
}

export default MenuItem;
