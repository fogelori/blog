import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useAuthTabs() {
  const getLastPathIndex = (tabName) => {
    switch (tabName) {
      case "login":
        return 0;
      case "signup":
        return 1;
      case "forgot-password":
        return 2;
      default:
        return 0;
    }
  };

  let location = useLocation();
  let navigate = useNavigate();
  const tabName = location.pathname.split("/").pop();
  const lastPathIndex = getLastPathIndex(tabName);
  const [tabIndex, setTabIndex] = React.useState(lastPathIndex);

  const handleTabsChange = (index) => {
    const tabsList = ["login", "signup", "forgot-password"];
    setTabIndex(index);
    const lastpath = tabsList[index];
    navigate(`./${lastpath}`, {
      replace: true,
      state: { ...location.state },
    });
  };

  return {
    tabIndex,
    location,
    handleTabsChange,
  };
}

export default useAuthTabs;
