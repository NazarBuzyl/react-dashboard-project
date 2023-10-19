import React, { createContext } from "react";

const StateContext = createContext();

const initialstate = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = React.useState(true);
  const [isClick, setIsClick] = React.useState(initialstate);
  const [screenSize, setScreenSize] = React.useState(undefined);
  const [currentColor, setCurrentColor] = React.useState("#1A97F5");
  const [currentMode, setCurrentMode] = React.useState("light");
  const [activeThemeSettings, setActiveThemeSettings] = React.useState(false);

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

  const handleCLick = (clicked) => {
    setIsClick({ ...initialstate, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClick,
        setIsClick,
        handleCLick,
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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => React.useContext(StateContext);
