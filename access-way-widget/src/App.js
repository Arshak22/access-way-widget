import React, { useState, useEffect, useRef } from "react";
import Menu from "./Menu";
import MainWidgetButton from "./MainWidgetButton";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const initialFontSizes = useRef(new Map());

  const storeInitialFontSizes = () => {
    const textElements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, span, a, li"
    );

    textElements.forEach((element) => {
      if (element.closest(".access-way-menu")) return;

      initialFontSizes.current.set(
        element,
        window.getComputedStyle(element).fontSize
      );
    });
  };

  useEffect(() => {
    if (initialFontSizes.current.size === 0) {
      storeInitialFontSizes();
    }
  }, []);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };

    const handleKeydown = (e) => {
      if (e.ctrlKey && e.key === "y") {
        e.preventDefault();
        toggleMenu();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="App">
      <div>
        <h1>sefjhbsdf</h1>
        <h2>sdsdgdg</h2>
        <h3>dgdfhbdfthfth</h3>
        <h4>werfergerg</h4>
        <h5>sfvdfvdfvdfv</h5>
        <h6>sferferferf</h6>
        <p>Lorem wygfejchbnsdcsdknjcmsdvcknjsdmvsdjvnmsdvbsdmnvskdvnjm</p>
        <span>sdcsdvcsdvsdvsdv</span>
      </div>
      <MainWidgetButton openMenu={openMenu} />
      {isMenuOpen && (
        <Menu closeMenu={closeMenu} initialFontSizes={initialFontSizes} />
      )}
    </div>
  );
}

export default App;
