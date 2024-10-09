// HeroSection.js
import React from 'react';
import './HeroSection.css';
import { FaYoutube, FaInstagram } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src="../assets/carry.png" alt="Profile" className="profile-image" />
      <h2>Watch Me Here</h2>
      <div className="social-links">
        <button className="social-button youtube">
          <FaYoutube /> YouTube
        </button>
        <button className="social-button instagram">
          <FaInstagram /> Instagram
        </button>
        <button className="social-button instagram">
          <FaInstagram /> Instagram
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
