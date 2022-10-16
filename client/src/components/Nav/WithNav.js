// WithNav.js (Stand-alone Functional Component)
import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router";

export default () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
