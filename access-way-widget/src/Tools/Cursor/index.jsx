import React, { useState, useEffect } from "react";

import { IoCheckmarkCircle } from "react-icons/io5";

import { PiCursorLight, PiCursorFill } from "react-icons/pi";
import { LuTextCursorInput } from "react-icons/lu";
import { FaICursor } from "react-icons/fa6";

export default function Cursor({ reset }) {
  const [isChecked, setIsChecked] = useState(0);

  useEffect(() => {
    if (reset) {
      setIsChecked(0);
    }
  }, [reset]);

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
          icon: PiCursorLight,
          name: "Cursor",
        };
      case 1:
        return {
          icon: PiCursorFill,
          name: "Big Cursor",
        };
      case 2:
        return {
          icon: LuTextCursorInput,
          name: "Reading Mask",
        };
      case 3:
        return {
          icon: FaICursor,
          name: "Reading Guid",
        };
      default:
        return { icon: PiCursorLight, name: "Cursor" };
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
