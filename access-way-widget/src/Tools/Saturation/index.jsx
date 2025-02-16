import React, { useState } from "react";

import { IoCheckmarkCircle } from "react-icons/io5";

import { MdInvertColors } from "react-icons/md";
import { MdOutlineInvertColorsOff } from "react-icons/md";

export default function Saturation() {
  const [isChecked, setIsChecked] = useState(0);

  const handleCheckTool = () => {
    if (isChecked === 3) {
      setIsChecked(0);
    } else {
      setIsChecked(isChecked + 1);
    }
  };

  const getIconAndName = () => {
    switch (isChecked) {
      case 0:
        return {
          icon: MdInvertColors,
          name: "Saturation",
        };
      case 1:
        return {
          icon: MdInvertColors,
          name: "Low Saturation",
        };
      case 2:
        return {
          icon: MdInvertColors,
          name: "High Saturation",
        };
      case 3:
        return {
          icon: MdOutlineInvertColorsOff,
          name: "Desaturate",
        };
      default:
        return { icon: Saturation, name: "Saturation" };
    }
  };

  const { icon: ToolIcon, name: toolName } = getIconAndName();

  return (
    <div
      className={`access-way-tool-section ${
        isChecked > 0 ? "active-tool-section" : ""
      }`}
      onClick={handleCheckTool}
    >
      {isChecked > 0 && (
        <span className="access-way-checked-tool">
          <IoCheckmarkCircle />
        </span>
      )}
      <ToolIcon className="access-way-tool-icon" />
      <h3 className="access-way-tool-name">{toolName}</h3>
      {isChecked > 0 && (
        <div className="access-way-tool-steps">
          {Array.from({ length: 3 }).map((_, index) => (
            <span
              key={index}
              className={`access-way-tool-step ${
                index < isChecked ? "active-step" : ""
              }`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
}
