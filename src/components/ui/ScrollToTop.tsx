"use client";

import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar el botón cuando el scroll sobrepase 100vh
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-1000 w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out flex items-center justify-center cursor-pointer"
          aria-label="Volver arriba"
        >
          <KeyboardArrowUpIcon className="text-7xl" />
        </button>
      )}
    </>
  );
};
