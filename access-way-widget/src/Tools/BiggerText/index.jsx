import React, { useState, useEffect } from "react";

import { IoCheckmarkCircle } from "react-icons/io5";

import { RxFontSize } from "react-icons/rx";

export default function BiggerText({ reset }) {
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
          icon: RxFontSize,
          name: "Bigger Text",
        };
      case 1:
        return {
          icon: RxFontSize,
          name: "Bigger Text (x1)",
        };
      case 2:
        return {
          icon: RxFontSize,
          name: "Bigger Text (x2)",
        };
      case 3:
        return {
          icon: RxFontSize,
          name: "Bigger Text (x3)",
        };
      case 4:
        return {
          icon: RxFontSize,
          name: "Bigger Text (x4)",
        };
      default:
        return { icon: RxFontSize, name: "Bigger Text" };
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
