import "./footer.css"
import {RiContactsLine} from "react-icons/ri"
import {GrInstagram} from "react-icons/gr"
import {SiFacebook} from "react-icons/si"
import {GiHelp} from "react-icons/gi";
import React from 'react';

const Footer = () => {

  
    return (
      <div className={`footer`}>
            <RiContactsLine className="icon"/>
            <GrInstagram className="icon"/>
            <SiFacebook className="icon"/>
            <GiHelp className="icon"/>
            </div>
    
    )
}
export default Footer;