import React, { useState, useRef, useEffect } from "react";
import "./style.css";

import { IoClose } from "react-icons/io5";
import { IoResizeOutline } from "react-icons/io5";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { RiResetLeftFill } from "react-icons/ri";

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
  const [selectedPosition, setSelectedPosition] = useState("right");
  const [resetParam, setResetParam] = useState(false);

  const handleResetAllSettings = () => {
    setResetParam(true);
    setIsOversized(false);
    setSelectedPosition("right");
    setTimeout(() => setResetParam(false), 100);
  };

  const menuRef = useRef(null);

  const handleSwitchOversize = () => {
    setIsOversized((prevState) => !prevState);
  };

  const handlePositionChange = (e) => {
    setSelectedPosition(e.target.value);
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
    <div
      className={`access-way-menu ${
        selectedPosition === "left" ? "left-position" : ""
      }`}
      ref={menuRef}
    >
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
        <div className="move-widget-container">
          <h3
            style={{
              fontSize: isOversized ? "24px" : "18px",
              letterSpacing: "1px",
            }}
          >
            <HiOutlineArrowsRightLeft
              style={{
                width: isOversized ? "30px" : "25px",
                height: "auto",
                position: "relative",
                top: "4px",
              }}
            />{" "}
            Move Widget
          </h3>
          <div className="move-widget-options">
            <label
              style={{
                fontSize: isOversized ? "24px" : "18px",
                letterSpacing: "1px",
              }}
            >
              <input
                type="radio"
                name="move-widget"
                value="left"
                checked={selectedPosition === "left"}
                onChange={handlePositionChange}
              />
              Left
            </label>
            <label
              style={{
                fontSize: isOversized ? "24px" : "18px",
                letterSpacing: "1px",
              }}
            >
              <input
                type="radio"
                name="move-widget"
                value="right"
                checked={selectedPosition === "right"}
                onChange={handlePositionChange}
              />
              Right
            </label>
          </div>
        </div>
        <div
          className={`access-way-tools-list ${
            isOversized ? "two-column" : "three-column"
          }`}
        >
          <Contrast reset={resetParam} />
          <Saturation reset={resetParam} />
          <HighlightLinks reset={resetParam} />
          <Cursor reset={resetParam} />
          <BiggerText reset={resetParam} />
          <AlignText reset={resetParam} />
          <TextSpacing reset={resetParam} />
          <LineHeight reset={resetParam} />
          <DyslexiaFriendly reset={resetParam} />
          <HideImages reset={resetParam} />
          <PauseAnimations reset={resetParam} />
          <MuteSounds reset={resetParam} />
        </div>
        <button
          className="reset-access-way-settings-btn"
          onClick={handleResetAllSettings}
        >
          <RiResetLeftFill style={{ marginRight: "15px" }} />
          Reset All Settings
        </button>
      </div>
    </div>
  );
}
