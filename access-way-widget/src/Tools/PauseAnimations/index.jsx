import React, { useState } from "react";

import { IoCheckmarkCircle } from "react-icons/io5";
import { IoPauseCircle, IoPlayCircle } from "react-icons/io5";

export default function PauseAnimations() {
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
        <IoPlayCircle className="access-way-tool-icon" />
      ) : (
        <IoPauseCircle className="access-way-tool-icon" />
      )}
      <h3 className="access-way-tool-name">Pause Animations</h3>
    </div>
  );
}
