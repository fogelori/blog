import classNames from "classnames";
import React from "react";
import CustomNavLink from "../CustomNavLink/CustomNavLink";
import "./Menuitem.css";

function MenuItem(props) {
  // let location = useLocation();

  return (
    <li
      className={classNames("menuItem", {
        "menuItem--clicked": props.isOpen,
      })}
    >
      <CustomNavLink
        to={props?.path}
        className={React.useCallback(
          ({ isActive }) =>
            classNames(
              "menuItem__link",
              {
                "menuItem__link--active": isActive,
                "menuItem__link--clicked": props.isOpen,
              },
              props.className
            ),
          [props.isOpen, props.className]
        )}
        onClick={props.onClick}
        // state={{ isModal: !!props.isModal }}
        isRequireAuth={props.isRequireAuth}
      >
        {props.name}
      </CustomNavLink>
    </li>
  );
}

export default MenuItem;
