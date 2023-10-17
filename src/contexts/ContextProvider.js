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
  const [screenSize, setScreenSize] = React.useState();

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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => React.useContext(StateContext);
