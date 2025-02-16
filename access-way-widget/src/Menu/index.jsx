import React, { useState } from "react";
import "./style.css";

import { IoClose } from "react-icons/io5";
import { IoResizeOutline } from "react-icons/io5";

export default function Menu({ closeMenu }) {
  const [isOversized, setIsOversized] = useState(false);

  const handleSwitchOversize = () => {
    setIsOversized((prevState) => !prevState);
  };

  return (
    <div className="access-way-menu">
      <div className="access-way-menu-header">
        <h2
          style={{
            fontSize: isOversized ? "24px" : "18px",
            letterSpacing: "1px",
          }}
        >
          AccessWay Menu (CTRL + U)
        </h2>
        <button onClick={closeMenu} className="access-way-menu-close-btn">
          <IoClose />
        </button>
      </div>
      <div className="access-way-menu-body">
        <div
          className="oversized-widget-menu-select"
          onClick={handleSwitchOversize}
        >
          <h3
            style={{
              fontSize: isOversized ? "24px" : "18px",
              letterSpacing: "1px",
            }}
          >
            <IoResizeOutline /> Oversized Widget
          </h3>
          <div className="oversize-menu-switch-section">
            <label className="oversize-menu-switch">
              <input
                type="checkbox"
                checked={isOversized}
                onChange={handleSwitchOversize}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
    </div>
  );
}
