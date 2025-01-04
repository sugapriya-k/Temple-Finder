import React from 'react';
import './userguide.css';

const UserGuidePage = () => {
    return (
        <div className="user-guide-container">
            <h1 className="guide-title">User Guide - TempleWorld Website</h1>
            <p className='intro'>Welcome to the user guide for the TempleWorld website! This comprehensive guide will walk you through the various features and functionalities of our platform, enabling you to make the most out of your experience exploring the fascinating world of temples from around Tamil Nadu.</p>
            <div className="table-of-contents">
                <h2>Table of Contents:</h2>
                <ol>
                    <li><a href="#introduction">Introduction to TempleWorld</a></li>
                    <li><a href="#home-page">Home Page</a></li>
                    <li><a href="#search-page">Search Page</a></li>
                    <li><a href="#famous-temples-page">Famous Temples Page</a></li>
                    <li><a href="#contact-us-page">Contact Us Page</a></li>
                    <li><a href="#about-us-page">About Us Page</a></li>
                </ol>
            </div>

            <div id="introduction" className="section">
                <h2>1. Introduction to TempleWorld</h2>
                <ul className='ul'>
                    <li>TempleWorld is your ultimate source for discovering and exploring the captivating world of temples. Our platform offers comprehensive information about various temples, including their rich history, cultural significance, and architectural marvels.</li>
                    <li>On the homepage, you will find a well-organized interface showcasing the most popular temples, allowing you to dive into the vast collection of temples with ease.</li>
                </ul>
            </div>

            <div id="home-page" className="section">
                <h2>2. Home Page</h2>
                <ul className='ul'>
                    <li>When you first land on the MapLocation page, your browser will ask for permission to access your location. Click "Allow" to enable the page to show nearby temples based on your current location.</li>
                    <li>Once your location is accessed, you will see a button labeled "Nearby Temples." Clicking this button will show you the temples located within a 5-kilometer radius of your current location. The button has a toggle effect, meaning it will display temples when turned "on" and hide them when turned "off."</li>
                    <li>The interactive map displays the location of each nearby temple with a clickable marker. Click on any marker to view additional information about the temple, including its name and address.</li>
                    <li>When you click on a temple marker, an information window (InfoWindow) will pop up, providing you with more details about the selected temple. This includes historical background, cultural significance, festivals, rituals, and nearby attractions.</li>
                    <li>Feel free to zoom in and out of the map using the mouse wheel or the zoom control on the map. You can also drag the map to explore other areas and discover more temples in Tamilnadu.</li>
                    <li>To explore temples in different locations, simply click the "Nearby Temples" button again to turn it off. You can then drag the map to a new area and click the button once more to find temples in the updated location.</li>
                </ul>
            </div>

            <div id="search-page" className="section">
                <h2>3. Search Page</h2>
                <ul className='ul'>
                    <li>The Search Page enables you to find specific temples by name or district. The search bar allows you to enter the temple's name or the district you wish to explore.</li>
                    <li>As you start typing, suggestions will appear to assist you in finding your desired temple. You can click on any suggestion to quickly view temple details.</li>
                    <li>After entering your search query, press "Enter" to fetch the results.</li>
                    <li>If no temples match your search criteria, a "No temples found" message will appear.</li>
                </ul>

            </div>

            <div id="famous-temples-page" className="section">
                <h2>4. Famous Temples Page</h2>
                <ul className='ul'> 
                    <li>The Famous Temples page features a handpicked selection of renowned temples from Tamil Nadu.</li>
                    <li>You can explore these famous temples and learn about their historical and cultural significance.</li>
                </ul>

            </div>

            <div id="contact-us-page" className="section">
                <h2>5. Contact Us Page</h2>
                <ul className='ul'>
                    <li>The Contact Us page provides various ways to get in touch with our team.</li>
                    <li> You can find our phone number and email address, allowing you to reach out to us with any inquiries or feedback.</li>
                    <li>Connect with us on social media platforms like Facebook, Twitter, and Instagram to stay updated with the latest temple news and features.</li>
                    <li>Our office address is also available for those who wish to visit us in person.</li>
                </ul>

            </div>

            <div id="about-us-page" className="section">
                <h2>6. About Us Page</h2>
                <ul className='ul'>
                    <li>The About Us page offers an insight into the purpose, mission, and services provided by TempleWorld.</li>
                    <li>Learn about our commitment to making temple information accessible to all individuals, regardless of their backgrounds or interests.</li>
                    <li>Discover the extensive database of temples from different places in Tamil Nadu, along with in-depth information about each temple's history, rituals, and nearby attractions.</li>
                    <li>Get acquainted with the passionate team of researchers, writers, photographers, and developers behind TempleWorld, dedicated to curating a unique temple experience for you.</li>
                </ul>

            </div>

            <div className="conclusion">
                <h2>Conclusion:</h2>
                <p className='intro'>Thank you for choosing TempleWorld as your go-to platform for exploring the rich heritage and culture of Tamil Nadu's temples. We hope this user guide has provided valuable insights and will enhance your experience on our website. If you have any questions or need assistance, feel free to contact us using the provided contact information. Happy temple exploration!</p>
            </div>
        </div>
    );
};

export default UserGuidePage;
