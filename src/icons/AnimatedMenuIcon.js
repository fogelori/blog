// instead I can use
// https://hamburger-react.netlify.app/

import classNames from "classnames";
import React from "react";
import "./AnimatedMenuIcon.css";

const AnimatedMenuIcon = (props) => {
  const iconClass = classNames({ "menu-icon": true });
  const iconClassBar1 = classNames({
    "menu-icon__bar1": true,
    "menu-icon__bar1--change": props.open,
    [props.className]: !!props.className,
  });
  const iconClassBar2 = classNames({
    "menu-icon__bar2": true,
    "menu-icon__bar2--change": props.open,
    [props.className]: !!props.className,
  });
  const iconClassBar3 = classNames({
    "menu-icon__bar3": true,
    "menu-icon__bar3--change": props.open,
    [props.className]: !!props.className,
  });

  return (
    <div className={iconClass} onClick={props.onClick}>
      <div className={iconClassBar1}></div>
      <div className={iconClassBar2}></div>
      <div className={iconClassBar3}></div>
    </div>
  );
};

export default AnimatedMenuIcon;
