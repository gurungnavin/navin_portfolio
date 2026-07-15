"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "accent-color";
const DEFAULT_ACCENT = "#f5c518";

type ColorContextValue = {
  accent: string;
  setAccent: (color: string) => void;
  reset: () => void;
};

const ColorContext = createContext<ColorContextValue | null>(null);

function applyAccent(color: string) {
  const root = document.documentElement;
  root.style.setProperty("--primary", color);
  root.style.setProperty("--accent", color);
  root.style.setProperty("--ring", color);
}

export function ColorProvider({ children }: { children: ReactNode }) {
  const [accent, setAccentState] = useState(DEFAULT_ACCENT);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setAccentState(saved);
      applyAccent(saved);
    }
  }, []);

  const setAccent = (color: string) => {
    setAccentState(color);
    applyAccent(color);
    localStorage.setItem(STORAGE_KEY, color);
  };

  const reset = () => {
    setAccentState(DEFAULT_ACCENT);
    applyAccent(DEFAULT_ACCENT);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ColorContext.Provider value={{ accent, setAccent, reset }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useAccent() {
  const ctx = useContext(ColorContext);
  if (!ctx) throw new Error("useAccent must be used within ColorProvider");
  return ctx;
}