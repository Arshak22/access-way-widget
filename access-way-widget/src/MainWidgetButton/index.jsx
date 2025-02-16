import React from "react";
import "./style.css";

import { IoAccessibility } from "react-icons/io5";

export default function MainWidgetButton({ openMenu }) {
  return (
    <button onClick={openMenu} className="access-way-widget-btn">
      <IoAccessibility />
    </button>
  );
}
