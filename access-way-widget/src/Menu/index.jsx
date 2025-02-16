import React, { useState, useRef, useEffect } from "react";
import "./style.css";

import { IoClose } from "react-icons/io5";
import { IoResizeOutline } from "react-icons/io5";

//Tools
import Contrast from "../Tools/Contrast";
import Saturation from "../Tools/Saturation";
import HighlightLinks from "../Tools/HighlightLinks";
import Cursor from "../Tools/Cursor";
import BiggerText from "../Tools/BiggerText";
import AlignText from "../Tools/AlignText";
import TextSpacing from "../Tools/TextSpacing";
import LineHeight from "../Tools/LineHeight";
import DyslexiaFriendly from "../Tools/DyslexiaFriendly";
import HideImages from "../Tools/HideImages";
import PauseAnimations from "../Tools/PauseAnimations";
import MuteSounds from "../Tools/MuteSounds";

export default function Menu({ closeMenu }) {
  const [isOversized, setIsOversized] = useState(false);
  const menuRef = useRef(null);

  const handleSwitchOversize = () => {
    setIsOversized((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <div className="access-way-menu" ref={menuRef}>
      <div className="access-way-menu-header">
        <h2
          style={{
            fontSize: isOversized ? "24px" : "18px",
            letterSpacing: "1px",
          }}
        >
          AccessWay Menu (CTRL + Y)
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
            <IoResizeOutline
              style={{
                width: isOversized ? "30px" : "25px",
                height: "auto",
                position: "relative",
                top: "4px",
              }}
            />{" "}
            Oversized Widget
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
        <div
          className={`access-way-tools-list ${
            isOversized ? "two-column" : "three-column"
          }`}
        >
          <Contrast />
          <Saturation />
          <HighlightLinks />
          <Cursor />
          <BiggerText />
          <AlignText />
          <TextSpacing />
          <LineHeight />
          <DyslexiaFriendly />
          <HideImages />
          <PauseAnimations />
          <MuteSounds />
        </div>
      </div>
    </div>
  );
}
