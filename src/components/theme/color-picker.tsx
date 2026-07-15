"use client";

import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAccent } from "@/components/theme/color-provider";

const PRESETS = ["#f5c518", "#3b82f6", "#22c55e", "#ef4444", "#a855f7", "#f97316"];

export function ColorPicker() {
  const { accent, setAccent, reset } = useAccent();

  return (
    <div className="flex items-center gap-2">
      <Palette className="size-4 text-muted-foreground" aria-hidden />
      <div className="flex gap-1.5">
        {PRESETS.map((color) => (
          <button
            key={color}
            type="button"
            aria-label={`Accent ${color}`}
            onClick={() => setAccent(color)}
            className="size-5 rounded-full border border-border transition-transform hover:scale-110"
            style={{
              backgroundColor: color,
              outline: accent === color ? "2px solid var(--foreground)" : "none",
              outlineOffset: "2px",
            }}
          />
        ))}
      </div>
      <input
        type="color"
        value={accent}
        onChange={(e) => setAccent(e.target.value)}
        aria-label="Custom accent color"
        className="size-6 cursor-pointer rounded border border-border bg-transparent"
      />
      <Button variant="ghost" size="sm" onClick={reset} className="text-xs">
        Reset
      </Button>
    </div>
  );
}