import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  darkModeSelector,
  toggleDarkMode,
} from "../../redux/slices/darkModeSlice";

const Footer = () => {
  const isDarkMode = useSelector(darkModeSelector);
  //   console.log(isDarkMode);
  const dispatch = useDispatch();

  return (
    <div className="fixed bottom-0 p-10 flex justify-between w-full">
      <div className="flex items-center gap-x-5 p-2 border rounded-lg">
        <p
          className={`cursor-pointer ${
            isDarkMode
              ? "text-[#fff5d9] opacity-100"
              : "text-[#fff5d9] opacity-50"
          }`}
          onClick={() => dispatch(toggleDarkMode(true))}
        >
          Dark
        </p>
        <p
          className={`cursor-pointer ${
            isDarkMode
              ? "text-[#fff5d9] opacity-50"
              : "text-[#fff5d9] opacity-100"
          }`}
          onClick={() => dispatch(toggleDarkMode(false))}
        >
          Light
        </p>
      </div>
      <div className="flex items-center gap-x-5 text-[#fff5d9]">
        <p>Marketplace</p>
        <p>Create your site</p>
      </div>
    </div>
  );
};

export default Footer;
