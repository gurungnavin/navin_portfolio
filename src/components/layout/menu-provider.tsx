"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type MenuContextValue = { open: boolean; setOpen: (v: boolean) => void };

const MenuContext = createContext<MenuContextValue>({
  open: false,
  setOpen: () => {},
});

export function MenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

export const useMenu = () => useContext(MenuContext);