import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import MainWidgetButton from "./MainWidgetButton";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        toggleMenu();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isMenuOpen]);

  return (
    <div className="App">
      <MainWidgetButton openMenu={openMenu} />
      {isMenuOpen && <Menu closeMenu={closeMenu} />}
    </div>
  );
}

export default App;
