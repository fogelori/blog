import React, { useState } from "react";
// import useAnimatedMenuIcon from "../../icons/AnimatedMenuIcon";
import AnimatedMenuIcon from "../../icons/AnimatedMenuIcon";
import { useGetMenuList } from "../../routes/Routes";
import Menu from "./Menu";
import Menuitem from "./Menuitem";
import classNames from "classnames";
import { useMedia } from "react-media";
import useScrolledDown from "../../hooks/useScrolledDown";
import { useAuth } from "../../contexts/AuthContext";
import "./NavBar.css";

function NavBar() {
  const { currentUser, logout } = useAuth();
  const Routes = useGetMenuList();
  const [open, setOpen] = useState(false);
  // const isSmallScreen = window.innerWidth < 600;
  const isSmallScreen = useMedia({ query: "(max-width: 600px)" });
  const isScrolledDown = useScrolledDown();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className={classNames("navbar", { "navbar--scroll": isScrolledDown })}>
        <Menu className="navbar__start-side" isOpen={open} routes={Routes[start]} />
          {Routes.map((route, index) => {
            return (
              route.isNavBarLink && (
                <Menuitem
                  key={index}
                  name={route.name}
                  linkPath={route.linkPath}
                  type={route.type}
                  isOpen={open}
                  onClick={handleClick}
                />
              )
            );
          })}
        </Menu>
        {isSmallScreen && (
          <div className="navbar__icon">
            <AnimatedMenuIcon
              className="navbar__icon--white"
              open={open}
              onClick={handleClick}
            />
          </div>
        )}
      </div>
      <div className="navbar__end-side">
        <Menu isOpen={open}>
          {!currentUser ? (
            <Menuitem
              name="Login"
              linkPath="/auth"
              type="modal"
              isOpen={open}
              onClick={handleClick}
            />
          ) : (
            <Menuitem
              name="Logout"
              linkPath="/auth"
              // type="modal"
              isOpen={open}
              onClick={logout}
            />
          )}
        </Menu>
    </nav>
  );
}

export default NavBar;
