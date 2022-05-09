// https://reactrouter.com/docs/en/v6/examples/modal

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Modal } from "src/components";
import { useGetMenuList } from "./Routes";
import AuthTabs from "src/pages/Auth/AuthTabs";

function RenderRoutes() {
  let location = useLocation();
  let state = location.state;
  const RoutesList = useGetMenuList();
  // console.log(location);
  // console.log("RenderRoutes");
  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        {RoutesList.map((route, index) => {
          const Component = route.component;
          return (
            <Route path={route.path} key={index} element={<Component />} />
          );
        })}
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="/auth/*"
            element={
              <Modal>
                <AuthTabs />
                {/* <Outlet /> */}
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default RenderRoutes;
