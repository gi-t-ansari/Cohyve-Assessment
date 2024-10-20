import React from "react";
// import { NAV_RIGHT_LIST_CONTENT } from "../../config";
import { FiPlus } from "react-icons/fi";
import { BsCursor } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { CiBellOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import profilePic from "../../assets/profile-pic.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slices/userSlice";

const NavRightList = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser(false));
  };
  return (
    <ul className="flex items-center gap-x-4 text-gray-400">
      <li className="cursor-pointer">
        <FiPlus size={20} />
      </li>
      <li className="cursor-pointer">
        <BsCursor size={20} className="-rotate-90" />
      </li>
      <li className="cursor-pointer">
        <HiOutlineAdjustmentsHorizontal size={20} />
      </li>
      <li className="cursor-pointer">
        <CiBellOn size={20} />
      </li>
      <li className="cursor-pointer">
        <Menu allowHover>
          <MenuHandler>
            <div className="flex items-center gap-x-1 cursor-pointer">
              <img src={profilePic} alt="profile-pic" /> <MdKeyboardArrowDown />
            </div>
          </MenuHandler>
          <MenuList className="p-0">
            <MenuItem
              onClick={handleLogout}
              className="text-red-500 hover:text-red-500 text-center"
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </li>
    </ul>
  );
};

export default NavRightList;
