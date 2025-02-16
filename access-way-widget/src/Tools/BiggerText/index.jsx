import React, { useState, useEffect } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RxFontSize } from "react-icons/rx";

export default function BiggerText({ reset, initialFontSizes }) {
  const [isChecked, setIsChecked] = useState(0);

  useEffect(() => {
    if (reset) {
      setIsChecked(0);
      localStorage.setItem("BiggerTextStep", 0);
    }
  }, [reset]);

  useEffect(() => {
    const savedCheckedState = localStorage.getItem("BiggerTextStep");
    if (savedCheckedState) {
      setIsChecked(Number(savedCheckedState));
    }
  }, [isChecked]);

  const handleCheckTool = () => {
    if (isChecked === 4) {
      setIsChecked(0);
      localStorage.setItem("BiggerTextStep", 0);
    } else {
      setIsChecked(isChecked + 1);
      localStorage.setItem("BiggerTextStep", isChecked + 1);
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

  useEffect(() => {
    const scaleFontSize = (factor) => {
      const textElements = document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, span, a, li"
      );

      textElements.forEach((element) => {
        if (element.closest(".access-way-menu")) return;

        if (isChecked === 0) {
          const initialFontSize = initialFontSizes.current.get(element);
          if (initialFontSize) {
            element.style.fontSize = initialFontSize;
          }
        } else {
          const initialFontSize = initialFontSizes.current.get(element);
          if (initialFontSize) {
            const initialSizeInPx = parseFloat(initialFontSize);
            const newSize = initialSizeInPx * factor;
            element.style.setProperty("font-size", `${newSize}px`, "important");
          }
        }
      });
    };

    let checkingScale = isChecked;

    let data = localStorage.getItem("BiggerTextStep");
    if (data) {
      checkingScale = Number(data);
    }
    switch (checkingScale) {
      case 0:
        scaleFontSize(1);
        break;
      case 1:
        scaleFontSize(1.5);
        break;
      case 2:
        scaleFontSize(2);
        break;
      case 3:
        scaleFontSize(3);
        break;
      case 4:
        scaleFontSize(4);
        break;
      default:
        scaleFontSize(1);
        break;
    }
  }, [isChecked]);

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
