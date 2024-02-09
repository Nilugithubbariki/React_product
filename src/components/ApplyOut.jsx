import React from "react";
import Hearder from "./Hearder";
import { Outlet } from "react-router-dom";

const ApplyOut = () => {
  return (
    <div>
      <Hearder />
      <Outlet />
    </div>
  );
};

export default ApplyOut;
