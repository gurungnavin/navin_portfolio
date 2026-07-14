import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-10 space-y-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-muted-foreground">FIG.01</span>
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-semibold">Spec-sheet theme test</h1>
      <p className="text-muted-foreground">
        Toggle should flip dark/light. Yellow is the accent.
      </p>
      <div className="flex gap-3">
        <Button>Primary button</Button>
        <Button variant="outline">Outline</Button>
        <Badge>React</Badge>
        <Badge variant="secondary">TypeScript</Badge>
      </div>
    </main>
  );
}