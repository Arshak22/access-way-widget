import React, { useState, useEffect } from "react";

import { IoCheckmarkCircle, IoLink } from "react-icons/io5";

export default function HighlightLinks({ reset }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (reset) {
      setIsChecked(false);
    }
  }, [reset]);

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
      <IoLink className="access-way-tool-icon" />
      <h3 className="access-way-tool-name">Highlight Links</h3>
    </div>
  );
}
