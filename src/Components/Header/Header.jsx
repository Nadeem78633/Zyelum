import React, { useState } from "react";
import Subheader from "../SubHeader/SubHeader";
import "./header.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <header className="header">
      {/* Main Header */}
      <div className="main-header">
        <div className="logo">
          <h1>OfBusiness</h1>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>

        {/* Navigation Links */}
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="/"><AssessmentOutlinedIcon/>Prices</a>
            </li>
            <li>
              <a href="/about"><NewspaperOutlinedIcon/> News</a>
            </li>
            <li>
              <a href="/services"><ShoppingCartOutlinedIcon/>
                Orders</a>
            </li>
            <li>
              <a href="/contact"><InfoOutlinedIcon/>
                About Us</a>
            </li>
            <button className="contact"><LockOutlinedIcon/> Login Now</button>
          </ul>
        </nav>
      </div>

      {/* Subheader */}
      <Subheader />
    </header>
  );
};

export default Header;
