import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from "@material-tailwind/react";
import {
  FaCommentAlt,
  FaMoneyBillWave,
  FaHome,
  FaBars,
  FaBuilding,
  FaCogs,
  FaShoppingCart,
  FaChartBar,
  FaFileAlt,
  FaUserPlus,
  FaSun,
  FaMoon,
  FaPhone, FaInfoCircle, FaSignOutAlt
} from 'react-icons/fa';

  const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [overlaySidebarOpen, setOverlaySidebarOpen] = useState(false);
  const [openSections, setOpenSections] = useState({});
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleOverlaySidebar = () => {
    setOverlaySidebarOpen(!overlaySidebarOpen);
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <div className={`sidebar ${darkMode ? 'dark-mode' : ''} ${sidebarOpen ? 'open' : ''}`}>
        <div style={{ fontSize: '24px' }} className="start-icon" onClick={toggleOverlaySidebar}>
          <FaBars />
        </div>
        <span style={{background:'pink',paddingLeft:'-40px' }} className='text-2xl'>Admin Page</span>
        <Link to="/" className="link hover:bg-cyan-600">
          <FaMoneyBillWave /> Dashboard
        </Link>
        <Link to="/addusers" className="link font-sans hover:font-serif hover:bg-cyan-600 ">
          <FaUserPlus /> Add Users
        </Link>
        <div>
          <p className="link  hover:bg-cyan-600 " onClick={() => toggleSection('assets')}>
            <FaBuilding /> <span >Assets</span>
          </p>
          {openSections.assets && (
            <div className="sub-links">
              <Link to="/addassets" className="sub-link  hover:bg-green-600 ">Add Assets</Link>
              <Link to="/manageassets" className="sub-link  hover:bg-green-600 ">Manage Assets</Link>
            </div>
          )}
        </div>
        <div>
          <p className="link  hover:bg-cyan-600 " onClick={() => toggleSection('products')}>
            <FaShoppingCart /> Product
          </p>
          {openSections.products && (
            <div className="sub-links">
              <Link to="/addproduct" className="sub-link  hover:bg-green-600 ">Add Product</Link>
              <Link to="/manageproduct" className="sub-link  hover:bg-green-600 ">Manage Product</Link>
            </div>
          )}
        </div>
        <div>
          <p className="link  hover:bg-cyan-600 " onClick={() => toggleSection('orders')}>
            <FaChartBar /> Orders
          </p>
          {openSections.orders && (
            <div className="sub-links">
              <Link to="/manageorders" className="sub-link  hover:bg-green-600 ">Manage Orders</Link>
            </div>
          )}
        </div>
        <div>
          <p className="link  hover:bg-cyan-600 " onClick={() => toggleSection('notice')}>
            <FaFileAlt /> Notice
          </p>
          {openSections.notice && (
            <div className="sub-links">
              <Link to="/addnotice" className="sub-link  hover:bg-green-400 ">Add Notice</Link>
              <Link to="/managenotice" className="sub-link  hover:bg-green-400 ">Manage Notice</Link>
            </div>
          )}
        </div>
        <Link to="/feedback" className="link  hover:bg-cyan-600">
          <FaCommentAlt /> Feedback
        </Link>
        <div className="mode-button-container" onClick={toggleDarkMode}>
          {darkMode ? (
            <>
              <FaSun /> <span><button>Light Mode</button></span>
            </>
          ) : (
            <>
              <FaMoon /> <span><button>Dark Mode</button></span>
            </>
          )}
        </div>
      </div>
      <div className={`overlay-sidebar ${darkMode ? 'dark-mode' : ''} ${overlaySidebarOpen ? 'open' : ''}`} style={{backgroundColor:"gray" }}>
        <div style={{ fontSize: '24px' }} className="start-icon" onClick={toggleOverlaySidebar}>
          <FaBars />
        </div>
        <Link to="/about" className="link">
          <FaInfoCircle /> About Us
        </Link>
        <Link to="/contact" className="link">
          <FaPhone /> Contact Us
        </Link>
        <Link to="/settings" className="link">
          <FaCogs /> Settings
        </Link>
        <Link to="/logout" className="link">
          <FaSignOutAlt  /> Logout
        </Link>
      </div>
    </>
  );
};
export default Sidebar;
