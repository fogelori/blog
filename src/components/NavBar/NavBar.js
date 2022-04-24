import React, { useState } from "react";
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
  const menuItems = Routes.filter((obj) => obj.isNavBarLink);
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMedia({ query: "(max-width: 600px)" });
  const isScrolledDown = useScrolledDown();

  const handleClick = () => {
    isSmallScreen && setOpen(!open);
  };

  return (
    <nav className={classNames("navbar", { "navbar--scroll": isScrolledDown })}>
      <Menu className="navbar__start-side" isOpen={open}>
        {menuItems.map((item, index) => {
          return (
            <Menuitem
              key={index}
              name={item.name}
              path={item.path.replace("/*", "")}
              isRequireAuth={item.isRequireAuth}
              isOpen={open}
              onClick={handleClick}
            />
          );
        })}
      </Menu>
      <Menu className="navbar__end-side" isOpen={open}>
        {!currentUser ? (
          <Menuitem
            name="Login"
            path="/auth"
            isOpen={open}
            isRequireAuth={true}
            onClick={handleClick}
          />
        ) : (
          <Menuitem name="Logout" path="/auth" isOpen={open} onClick={logout} />
        )}
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
    </nav>
  );
}

export default NavBar;
