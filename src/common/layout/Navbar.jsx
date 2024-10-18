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

const Navbar = () => {
  const { pathname } = useLocation();
  //   console.log(pathname);

  return (
    <nav className="w-full flex justify-center">
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
