import { useState, useEffect } from "react";

type BootstrapWidths = "xs" | "sm" | "md" | "lg" | "xl";

const getScreenSize = (): BootstrapWidths => {
  const { innerWidth } = window;
  switch (true) {
    case innerWidth < 576: {
      return "xs";
    }
    case innerWidth < 767: {
      return "sm";
    }
    case innerWidth < 991: {
      return "md";
    }
    case innerWidth < 1199: {
      return "lg";
    }
    default: {
      return "xl";
    }
  }
};

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(getScreenSize);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(getScreenSize);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
};
