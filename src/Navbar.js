import React, { useState, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
import Sidebar from "./Sidebar";



const Navbar = () => {
  const showMenu = () => {
    if (window.innerWidth > 800) {
      setShowLinks(true);
    } else {
      setShowLinks(false);
    }
  };

  useEffect(() => {

    showMenu();
    window.addEventListener("resize", showMenu);
    return () => {
      window.removeEventListener("resize", showMenu);
    };
  }, []);

  const [showLinks, setShowLinks] = useState(false);
  
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        {showLinks && <Sidebar />}
        <ul className="social-icons">
          <li>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
