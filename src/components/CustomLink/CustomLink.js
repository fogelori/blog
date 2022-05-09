import { Link, useLocation } from "react-router-dom";
import React from "react";
import { useAuth } from "src/contexts/AuthContext";

function CustomLink({ children, isNeedAuth, isHideNonAuth, state, ...rest }) {
  const { currentUser } = useAuth();
  const location = useLocation();
  //   if (location.state?.from) {
  //     location.state.from.state = null;
  //   }

  if (!currentUser && isHideNonAuth) {
    return null;
  }

  if (!currentUser && isNeedAuth) {
    return (
      <Link
        {...rest}
        to="/auth"
        state={{ ...state, isNeedAuth: true, from: location }}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link {...rest} state={{ ...state, from: location }}>
      {children}
    </Link>
  );

  // return (
  //   <Link {...rest} state={{ ...state, from: location }}>
  //     {children}
  //   </Link>
  // );
}

export default CustomLink;
