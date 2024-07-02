import React from "react";
import bduImage from "../assets/bdu2.png";
import '../styles/header.css';

const Header=()=>{
  return (
    <div className="header">
      {/* Image on the left */}
      <img
        src={bduImage}
        alt="BDU Logo"
        style={{ height: "100px", width: "250px", marginLeft: '100px' }}
      />
      {/* Text on the right */}
      <div className="animated-text-container">
        <span className="animated-text">
           ASSET DEVELOPMENT AND INCOME GENERATION MANAGEMENT SYSTEM 
        </span>
      </div>
    </div>
  );
};

export default Header;
