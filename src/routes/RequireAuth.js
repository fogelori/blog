import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function RequireAuth({ children }) {
  const { currentUser } = useAuth();
  const location = useLocation();
  // if (location.state?.from) {
  //   location.state.from.state = null;
  // }
  // console.log(location);
  // console.log("requireauth");

  if (!currentUser) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return (
      <Navigate
        replace
        to="/auth"
        state={{
          // isModal: false,
          // isRequireAuth: true,
          // from: location.state?.from,
          to: location.pathname,
        }}
      />
    );
  }
  if (currentUser.extraFields.role !== "editor") {
    return (
      <Navigate
        replace
        to="/"
        // state={{ isModal: false, from: location.state?.from }}
      />
    );
  }

  return children;
}

//   return (
//     <Route
//       {...rest}
//       element={(props) => {
//         return currentUser ? (
//           <Component {...props} />
//         ) : (
//           <Navigate replace to="/auth/login" />
//         );
//       }}
//     ></Route>
//   );
// }
