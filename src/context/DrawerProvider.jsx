import { createContext, useContext, useState } from "react";

const DrawerContext = createContext();

export const useDrawer = () => useContext(DrawerContext);

export const DrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();

  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <DrawerContext.Provider value={{ open, size, showLargeDrawer, onClose }}>
      {children}
    </DrawerContext.Provider>
  );
};
