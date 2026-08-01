"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Project } from "@/content/projects";

type ModalContextValue = {
  active: Project | null;
  open: (p: Project) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function WorksModalProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <ModalContext.Provider
      value={{ active, open: setActive, close: () => setActive(null) }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useWorksModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useWorksModal must be used within WorksModalProvider");
  return ctx;
}