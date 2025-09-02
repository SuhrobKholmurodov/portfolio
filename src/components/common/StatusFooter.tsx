import {
  GitBranch,
  AlertTriangle,
  Zap,
  Palette,
  RefreshCcw,
  GitGraph,
  Rocket,
  CircleX,
  Braces,
  RadioTower,
  BellDot,
  ChevronsRightLeft,
} from "lucide-react";

export function StatusFooter() {
  return (
    <footer className="bg-zinc-900 h-6 border-t border-zinc-800 text-xs text-zinc-400 flex items-center justify-between pr-3 font-mono">
      <div className="flex items-center gap-2">
        <div className="bg-blue-500 sm:hidden h-5 w-6 flex items-center justify-center">
          <ChevronsRightLeft size={18} className="text-white" />
        </div>
        <div className="flex items-center gap-1 hover:bg-zinc-800 px-1 rounded cursor-pointer">
          <GitBranch className="w-3 h-3" />
          <span>master*</span>
          <div className="flex items-center gap-1 hover:bg-zinc-800 px-1 rounded cursor-pointer">
            <RefreshCcw className="w-3 h-3" />
          </div>
        </div>

        <div className="flex items-center gap-3 hover:bg-zinc-800 px-1 rounded cursor-pointer">
          <GitGraph className="w-3 h-3" />
        </div>
        <div className="flex items-center gap-3 hover:bg-zinc-800 px-1 rounded cursor-pointer">
          <Rocket className="w-3 h-3" />
        </div>

        <span className="hover:bg-zinc-800 px-1 rounded cursor-pointer flex items-center gap-1">
          <CircleX className="w-3 h-3" /> 0
          <AlertTriangle className="w-3 h-3" />0
        </span>
        <span className="hover:bg-zinc-800 sm:hidden px-1 rounded cursor-pointer">
          [TypeScript Importer]:Symbols: 78
        </span>
        <span className="hover:bg-zinc-800 sm:hidden px-1 rounded cursor-pointer">
          <Zap className="w-3 h-3" />
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="hover:bg-zinc-800 sm:hidden px-1 rounded cursor-pointer">
          UTF-8
        </span>

        <span className="hover:bg-zinc-800 sm:hidden px-1 rounded cursor-pointer">
          CRLF
        </span>

        <span className="hover:bg-zinc-800 sm:hidden px-1 rounded cursor-pointer flex items-center gap-1">
          <Braces className="w-3 h-3" />
          TypeScript JSX
        </span>

        <span className="hover:bg-zinc-800 px-1 sm:hidden rounded cursor-pointer flex items-center gap-1">
          <RadioTower className="w-3 h-3" />
          Go Live
        </span>
        <span className="hover:bg-zinc-800 px-1 rounded cursor-pointer flex items-center gap-1">
          <Palette className="w-3 h-3" />
          Prettier
        </span>

        <div className="flex items-center">
          <span className="hover:bg-zinc-800 px-1 rounded cursor-pointer">
            <BellDot className="w-3 h-3" />
          </span>
        </div>
      </div>
    </footer>
  );
}
