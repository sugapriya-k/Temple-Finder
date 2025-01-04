import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md"
import "./contactus.css"
const Contact = () => {
  return (
    <div className="contact-container">
      <div class="contit"><h3>Contact Us</h3></div>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Phone Number:</h3>
          <p><FaIcons.FaPhoneAlt/>+1 123-456-7890</p>
        </div>
        <div className="contact-item">
          <h3>Email:</h3>
          <p><MdIcons.MdMail/>info@example.com</p>
        </div>
        <div className="contact-item">
          <h3>Social Media:</h3>
          <ul>
            <li id='con'><a href="#"><FaIcons.FaFacebook/>Facebook</a></li>
            <li id='con'><a href="#"><FaIcons.FaTwitter/>Twitter</a></li>
            <li id='con'><a href="#"><FaIcons.FaInstagram/>Instagram</a></li>
          </ul>
        </div>
        <div className="contact-item">
          <h3>Address:</h3>
          <p>123 Main Street</p>
          <p>City, State 12345</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
