import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
// import Modal from "../../components/Modal/Modal";
import Signup from "./Signup";
import Login from "./Login";
import "./AuthTabs.css";
import ForgotPassword from "./ForgotPassword";

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

function AuthTabs() {
  const tabsList = ["login", "signup", "forgot-password"];
  let location = useLocation();
  const tabName = location.pathname.split("/").pop();
  const lastPathIndex = getLastPathIndex(tabName);
  const [tabIndex, setTabIndex] = React.useState(lastPathIndex);
  let state = location.state;
  let navigate = useNavigate();

  const handleTabsChange = (index) => {
    setTabIndex(index);
    const lastpath = tabsList[index];
    navigate(`./${lastpath}`, {
      replace: true,
      state: { ...state },
    });
  };

  return (
    <div className="auth-tabs">
      <Routes>
        <Route
          path=""
          element={<Navigate replace to="login" state={{ ...state }} />}
        />
      </Routes>
      {/* <Modal> */}
      <Tabs index={tabIndex} onChange={handleTabsChange}>
        {tabIndex !== 2 && (
          <TabList className="auth-tabs__TabList">
            <Tab className="auth-tabs__Tab">Login</Tab>
            <Tab className="auth-tabs__Tab">SignUp</Tab>
            {/* <Tab className="auth-tabs__Tab">Reset Password</Tab> */}
          </TabList>
        )}
        <TabPanels>
          <TabPanel>
            <Login setTabIndex={handleTabsChange} />
          </TabPanel>
          <TabPanel>
            <Signup />
          </TabPanel>
          <TabPanel>
            <ForgotPassword setTabIndex={handleTabsChange} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      {/* </Modal> */}
    </div>
  );
}

export default AuthTabs;
