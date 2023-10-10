import React from "react";
import { links, social } from "./data";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Sidebar() {
  return (
    <div>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>

      <ul className="social-icons">
        {social.map((item) => (
          <li key={item.id}>
            <a href={item.url} className="social-icon">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
