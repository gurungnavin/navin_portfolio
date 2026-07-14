import { Hero } from "@/components/sections/hero";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { ColorPicker } from "@/components/theme/color-picker";

export default function Home() {
  return (
    <>
      <div className="fixed right-4 top-4 z-50 flex items-center gap-3">
        <ColorPicker />
        <ThemeToggle />
      </div>
      <Hero />
    </>
  );
}