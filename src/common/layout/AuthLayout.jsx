import React from "react";
import Navbar from "./Navbar";

const AuthLayout = (props) => {
  return (
    <div className="w-screen min-h-screen  px-10 bg-[#0c0c0c]">
      <Navbar />
      <div className="overflow-y-auto">{props.children}</div>
    </div>
  );
};

export default AuthLayout;
