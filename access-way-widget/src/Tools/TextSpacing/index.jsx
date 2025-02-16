import React, { useState } from "react";

import { IoCheckmarkCircle } from "react-icons/io5";

import { RxLetterSpacing } from "react-icons/rx";

export default function TextSpacing() {
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
          icon: RxLetterSpacing,
          name: "Text Spacing",
        };
      case 1:
        return {
          icon: RxLetterSpacing,
          name: "Spacing (x1.5)",
        };
      case 2:
        return {
          icon: RxLetterSpacing,
          name: "Spacing (x2)",
        };
      case 3:
        return {
          icon: RxLetterSpacing,
          name: "Spacing (x3)",
        };
      default:
        return { icon: RxLetterSpacing, name: "Text Spacing" };
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
