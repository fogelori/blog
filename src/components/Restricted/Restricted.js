// good articles
// https://medium.com/geekculture/how-to-conditionally-render-react-ui-based-on-user-permissions-7b9a1c73ffe2
// https://isamatov.com/react-permissions-and-roles/

// import { useLocation } from "react-router-dom";
import { useAuth } from "src/contexts/AuthContext";
import jsonData from "./permissions.json";

function Restricted(props) {
  const { currentUser } = useAuth();
  //   const location = useLocation();
  const getAllowedGroups = () => {
    // const pathTree = location.pathname.split("/");
    // pathTree.shift();
    // let currentJsonPath = jsonData;
    // pathTree.forEach((pathLevel) => {
    //   currentJsonPath = currentJsonPath?.[pathLevel];
    // });
    // return currentJsonPath?.["actions"][props.action];
    return jsonData[props.action];
  };
  const isUserAllowed = () => {
    const allowedGroups = getAllowedGroups();
    return allowedGroups?.some(
      (group) => group === currentUser?.extraFields.role
    );
  };

  const userAllowed = isUserAllowed();

  if (!userAllowed) {
    return null;
  }
  return props.children;
}

export default Restricted;
