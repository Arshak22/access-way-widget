import React, { useState } from "react";

import { IoCheckmarkCircle } from "react-icons/io5";
import { MdImage, MdHideImage } from "react-icons/md";

export default function HideImages() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckTool = () => {
    setIsChecked(!isChecked);
  };

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
      {isChecked ? (
        <MdHideImage className="access-way-tool-icon" />
      ) : (
        <MdImage className="access-way-tool-icon" />
      )}
      <h3 className="access-way-tool-name">Hide Images</h3>
    </div>
  );
}
