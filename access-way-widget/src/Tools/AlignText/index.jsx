import React, { useState, useEffect } from "react";

import { IoCheckmarkCircle } from "react-icons/io5";

import {
  FiAlignLeft,
  FiAlignRight,
  FiAlignCenter,
  FiAlignJustify,
} from "react-icons/fi";

export default function AlignText({ reset }) {
  const [isChecked, setIsChecked] = useState(0);

  useEffect(() => {
    if (reset) {
      setIsChecked(0);
    }
  }, [reset]);

  const handleCheckTool = () => {
    if (isChecked === 4) {
      setIsChecked(0);
    } else {
      setIsChecked(isChecked + 1);
    }
  };

  const getIconAndName = () => {
    switch (isChecked) {
      case 0:
        return {
          icon: FiAlignLeft,
          name: "Text Align",
        };
      case 1:
        return {
          icon: FiAlignLeft,
          name: "Align Left",
        };
      case 2:
        return {
          icon: FiAlignRight,
          name: "Align Right",
        };
      case 3:
        return {
          icon: FiAlignCenter,
          name: "Align Center",
        };
      case 4:
        return {
          icon: FiAlignJustify,
          name: "Justify",
        };
      default:
        return { icon: FiAlignLeft, name: "Text Align" };
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
          {Array.from({ length: 4 }).map((_, index) => (
            <span
              key={index}
              className={`access-way-tool-step access-way-tool-step-small ${
                index < isChecked ? "active-step" : ""
              }`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
}
