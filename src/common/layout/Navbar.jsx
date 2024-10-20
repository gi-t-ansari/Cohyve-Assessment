import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { NAVBAR_NO_AUTH_TABS_CONTENT } from "../../config";
import { GoNorthStar } from "react-icons/go";
import { IoIosColorPalette } from "react-icons/io";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/slices/userSlice";
import { NavLeftList, NavRightList } from "../../components";

const Navbar = () => {
  const { pathname } = useLocation();
  const { isAuthenticated } = useSelector(userSelector);

  //   console.log(pathname);

  return isAuthenticated ? (
    <nav className="w-full flex justify-between sticky top-0 z-10 bg-[#0c0c0c] py-6">
      <NavLeftList />
      <div className="absolute left-[50%]  translate-x-[-50%] ">
        <div className="w-96 relative">
          <input
            type="search"
            placeholder="Search comet"
            className="p-2 px-4 text-sm rounded-2xl bg-[#2a2a2a] w-full"
          />
          <IoIosColorPalette className="absolute  bottom-[30%] right-4 text-gray-700" />
        </div>
      </div>
      <NavRightList />
    </nav>
  ) : (
    <nav className="w-full flex justify-center ">
      <Tabs value="html">
        <TabsHeader
          className={"rounded-2xl  flex justify-center gap-x-3"}
          style={{ backgroundColor: "#1a1515" }}
        >
          {NAVBAR_NO_AUTH_TABS_CONTENT.map((item, i) => (
            <Tab
              key={item.label}
              value={item.value}
              className={`rounded-xl px-5  text-[#fcfcd8] font-thin  ${
                pathname === item.url && "bg-[#fcfcd8] text-[#1a1515] "
              }`}
            >
              <Link to={item.url} className="flex items-center gap-x-2">
                {i === 0 ? (
                  <>
                    <GoNorthStar />
                    {item.label}
                  </>
                ) : (
                  item.label
                )}
              </Link>
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
    </nav>
  );
};

export default Navbar;
