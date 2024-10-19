import React from "react";
import Navbar from "./Navbar";
import backGroundImage from "../../assets/bg-img.png";
import Footer from "./Footer";

const NoAuthLayout = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`w-full min-h-screen p-10`}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      {/* <Navbar /> */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full  text-center">
        <Navbar />
        <div>{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default NoAuthLayout;
