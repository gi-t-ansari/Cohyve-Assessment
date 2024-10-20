import React from "react";
import { APP_URL, NAV_LEFT_LIST_CONTENT } from "../../config";
import { GoNorthStar } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

const NavLeftList = () => {
  const { pathname } = useLocation();
  return (
    <ul className="flex items-center gap-x-4 text-[#fff5d9] text-sm">
      {NAV_LEFT_LIST_CONTENT.map((item, i) =>
        i === 0 ? (
          <li>
            <Link
              to={APP_URL.HOME}
              className={`flex items-center gap-x-1 cursor-pointer ${
                location === item.url && "opacity-[50%]"
              }`}
            >
              <GoNorthStar />
              {item.name}
            </Link>
          </li>
        ) : (
          <li
            className={`cursor-pointer ${
              location === item.url && "opacity-[50%]"
            }`}
          >
            <Link to={item.url === APP_URL.DISCOVER ? APP_URL.HOME : item.url}>
              {item.name}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default NavLeftList;
