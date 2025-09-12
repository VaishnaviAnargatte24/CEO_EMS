// src/Components/Header/Header.jsx
import React from "react";
import "./Header.css";

// Import your local images
import SchoolLogo from "../../assets/Images/concept_school_logo.png";
import ProfileImage from "../../assets/Images/Profile_image.png";

const Header = () => {
  return (
    <header className="top-navbar">
      <div className="logo">
        <img src={SchoolLogo} alt="Concept School" className="school-logo" />
      </div>

      {/* Profile Image */}
      <img src={ProfileImage} alt="Profile" className="profile-avatar" />
    </header>
  );
};

export default Header;
