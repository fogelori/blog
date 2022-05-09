import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
// import Modal from "../../components/Modal/Modal";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import useAuthTabs from "./useAuthTabs";
import "./AuthTabs.css";

function AuthTabs() {
  const { tabIndex, location, handleTabsChange } = useAuthTabs();

  return (
    <div className="auth-tabs">
      <Routes>
        <Route
          path=""
          element={
            <Navigate replace to="login" state={{ ...location.state }} />
          }
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
