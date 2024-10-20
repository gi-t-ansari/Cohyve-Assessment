import { APP_URL } from "./url";
import { FiPlus } from "react-icons/fi";
import { BsCursor } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { CiBellOn } from "react-icons/ci";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.png";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";
import image6 from "../assets/img6.png";
import image7 from "../assets/img7.png";
import image8 from "../assets/img8.png";
import image9 from "../assets/img9.png";
import image10 from "../assets/img10.png";
import image11 from "../assets/img11.png";

export const NAVBAR_NO_AUTH_TABS_CONTENT = [
  {
    label: "comet",
    url: APP_URL.COMET,
    value: "comet",
  },
  {
    label: "Manifesto",
    url: APP_URL.MANIFESTO,
    value: "manifesto",
  },
  {
    label: "Discover",
    url: APP_URL.DISCOVER,
    value: "discover",
  },
  {
    label: "Login",
    url: APP_URL.LOGIN,
    value: "login",
  },
  {
    label: "Signup",
    url: APP_URL.SIGNUP,
    value: "signup",
  },
];

export const NAV_LEFT_LIST_CONTENT = [
  {
    name: "plus",
    url: APP_URL.COMET,
  },
  {
    name: "Upgrade",
    url: APP_URL.UPGRADE,
  },
  {
    name: "Home",
    url: APP_URL.HOME,
  },
  {
    name: "Discover",
    url: APP_URL.DISCOVER,
  },
];

export const NAV_RIGHT_LIST_CONTENT = [
  {
    name: "comet",
    icon: FiPlus,
  },
  {
    name: "cursor",
    icon: BsCursor,
  },
  {
    name: "adjust",
    url: HiOutlineAdjustmentsHorizontal,
  },
  {
    name: "notification",
    url: CiBellOn,
  },
];

export const GALLERY_IMAGES = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image6 },
  { image: image7 },
  { image: image8 },
  { image: image9 },
  { image: image10 },
  { image: image11 },
];
