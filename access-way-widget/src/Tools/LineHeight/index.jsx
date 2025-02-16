import React, { useState, useEffect } from "react";

import { IoCheckmarkCircle } from "react-icons/io5";

import { RxLineHeight } from "react-icons/rx";

export default function LineHeight({ reset }) {
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
          icon: RxLineHeight,
          name: "Line Height",
        };
      case 1:
        return {
          icon: RxLineHeight,
          name: "Height (x1.5)",
        };
      case 2:
        return {
          icon: RxLineHeight,
          name: "Height (x1.75)",
        };
      case 3:
        return {
          icon: RxLineHeight,
          name: "Height (x2)",
        };
      default:
        return { icon: RxLineHeight, name: "Line Height" };
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
