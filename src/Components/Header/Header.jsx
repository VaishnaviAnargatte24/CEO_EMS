// src/Components/Header/Header.jsx
import React from "react";
import "./Header.css";

// Import your local images
import SchoolLogo from "../../assets/Images/concept_school_logo.png";
import ProfileImage from "../../assets/Images/Profile_image.png";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="top-navbar">
      <div className="logo">
        <button className="menu-icon" onClick={toggleSidebar} aria-label="Open menu">
          &#9776;
        </button>
        <img src={SchoolLogo} alt="Concept School" className="school-logo" />
      </div>

      <img
        src={ProfileImage}
        alt="Profile"
        className="profile-avatar"
      />
    </header>
  );
};

export default Header;
