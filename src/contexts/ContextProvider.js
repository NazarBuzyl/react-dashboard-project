import React, { createContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = React.useState(true);
  const [screenSize, setScreenSize] = React.useState(undefined);
  const [currentColor, setCurrentColor] = React.useState("#1A97F5");
  const [currentMode, setCurrentMode] = React.useState("light");
  const [activeThemeSettings, setActiveThemeSettings] = React.useState(false);
  const [openElements, setOpenElements] = React.useState([]);

  // ----------------- Action for modal windows
  const closeElement = (elementId) => {
    setOpenElements((prevElements) =>
      prevElements.filter((el) => el !== elementId)
    );
  };

  const addElement = (elementId) => {
    setOpenElements((prevElements) => [...prevElements, elementId]);
  };

  const handleClickOutside = (e) => {
    openElements.forEach((elementId) => {
      const element = document.getElementById(elementId);
      if (element && !element.contains(e.target)) {
        closeElement(elementId);
      }
    });
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openElements]);

  // ----------------- MODE and COLOR
  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);

    setActiveThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);

    setActiveThemeSettings(false);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        activeThemeSettings,
        setActiveThemeSettings,
        setColor,
        setMode,

        openElements,
        closeElement,
        addElement,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => React.useContext(StateContext);
