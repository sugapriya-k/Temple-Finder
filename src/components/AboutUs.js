import React from 'react';
import "./about.css"

const AboutPage = () => {
  return (
    <div className='about'>
      <div className='abtdiv'>
        <h1>About Us</h1>
        <p className='abt'>Welcome to TempleWorld - your ultimate source for discovering and exploring the fascinating world of temples from around <b>TAMILNADU</b>. Our platform is designed to provide you with comprehensive information about various temples, their rich history, cultural significance, and architectural marvels.</p>
      </div>
      <div className='abtdiv'>
        <h2>Our Mission</h2>
        <p className='abt'>At TempleWorld, our mission is to make temple information accessible to people of all backgrounds and interests. We aim to create a space where spiritual seekers, history enthusiasts, and cultural explorers can come together to learn and appreciate the beauty of temples and their diverse traditions.</p>
      </div>
      <div className='abtdiv'>
        <h2>What We Offer</h2>
        <p className='abt'>Our website features an extensive database of temples from different places of TAMILNADU. You can search for temples based on their names or locations. Each temple entry provides detailed information about its history, significance, festivals, rituals, and nearby attractions.</p>
      </div>
      <div className='abtdiv'>
        <h2>Meet Our Team</h2>
        <p className='abt'>Our team at TempleWorld is a group of dedicated professionals who share a passion for heritage, culture, and spirituality. We bring together researchers, writers, photographers, and developers to curate a unique temple experience for you.</p>
      </div>
      <p className='tnk'>Thank you for being a part of our journey to explore the world of temples. We hope you enjoy your time on our website and find it both educational and inspiring.</p>

    </div>
  );
};

export default AboutPage;
