"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type BootContextValue = { booted: boolean; setBooted: (v: boolean) => void };

const BootContext = createContext<BootContextValue>({
  booted: true,
  setBooted: () => {},
});

export function BootProvider({ children }: { children: ReactNode }) {
  const [booted, setBooted] = useState(false);
  return (
    <BootContext.Provider value={{ booted, setBooted }}>
      {children}
    </BootContext.Provider>
  );
}

export const useBoot = () => useContext(BootContext);