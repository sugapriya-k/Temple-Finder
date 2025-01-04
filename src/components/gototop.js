import React, { useState, useEffect } from 'react';
import * as BiIcons from "react-icons/bi"
import './gototop.css'; 

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`go-to-top-button ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
      <p className='gototopbtn'><BiIcons.BiSolidArrowToTop/></p>
    </div>
  );
};

export default GoToTopButton;
