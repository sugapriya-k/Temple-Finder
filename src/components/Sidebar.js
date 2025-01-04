import React, { useState} from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css"; 
import image from "./ohm.jpeg"

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div className={`nav ${sidebar ? "active" : ""}`}>
        <p className="nav-icon">
          <FaIcons.FaBars onClick={showSidebar} />
        </p>
        <img
          className="logo"
          src={image}
          alt="ohm.jpeg"
        />
        <h1 className="title">
          Hindu Religious & Charitable Endowments Department
        </h1>
      </div>
      <nav className={`sidebar-nav ${sidebar ? "active" : ""}`}>
        <div className="sidebar-wrap">
          <p className="nav-icon">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </p>
          <ul className="sub-menu">
            {SidebarData.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="link" onClick={showSidebar}>
                  {item.icon}
                  <span className="tit" >{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
