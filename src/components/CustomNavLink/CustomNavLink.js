import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";

function CustomNavLink({ children, isRequireAuth, state, to, ...rest }) {
  const { currentUser } = useAuth();
  const location = useLocation();
  // console.log(authClassNames);
  //   if (location.state?.from) {
  //     location.state.from.state = null;
  //   }
  //   console.log(location);

  if (!currentUser && isRequireAuth) {
    const authClassNames = rest.className({ isActive: false });
    return (
      <NavLink
        {...rest}
        to="/auth"
        className={authClassNames}
        state={{ ...state, to: to, backgroundLocation: location }}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <NavLink {...rest} to={to} state={{ ...state }}>
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
