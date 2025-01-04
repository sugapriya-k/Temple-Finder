import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,

   
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoIosPaper />,

   
  },
  {
    title: "Search",
    path: "/search",
    icon: <FaIcons.FaSearch/>,
  },
  {
    title: "PopularTemples",
    path: "/famous",
    icon: <MdIcons.MdTempleBuddhist />,
  },
  {
    title: "User Guide",
    path: "/userguide",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
  },
];