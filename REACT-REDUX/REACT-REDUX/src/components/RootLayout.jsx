import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBarPanel";
import { Provider } from "react-redux";
import store from "../store/store";

// RootLayout component with Redux store provider and navigation
const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;