import React from "react";
import "./Footer.css"; // Import the Footer CSS file
import image1 from "../assets/carry.png"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="profile-section">
        {/* Placeholder Profile Image */}
        <img
          src={image1} // Placeholder for the profile picture
          alt="Profile"
          className="profile-img"
        />
        <h3>Watch Me Here</h3>
        <div className="social-buttons">
          {/* Placeholder YouTube Link */}
          <a href="#" className="youtube-btn">
            YouTube
          </a>
          {/* Placeholder Instagram Links */}
          <a href="#" className="instagram-btn">
            Instagram
          </a>
          <a href="#" className="instagram-btn">
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-links">
        <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
      </div>
      <div className="social-icons">
        {/* Placeholder for Social Media Icons */}
        <a href="#">
          <img
            src="https://via.placeholder.com/24"
            alt="Facebook Icon"
            className="social-icon"
          />
        </a>
        <a href="#">
          <img
            src="https://via.placeholder.com/24"
            alt="Instagram Icon"
            className="social-icon"
          />
        </a>
        <a href="#">
          <img
            src="https://via.placeholder.com/24"
            alt="Twitter Icon"
            className="social-icon"
          />
        </a>
        <a href="#">
          <img
            src="https://via.placeholder.com/24"
            alt="YouTube Icon"
            className="social-icon"
          />
        </a>
      </div>
      <p>© 2024 Chord AI</p>
    </footer>
  );
};

