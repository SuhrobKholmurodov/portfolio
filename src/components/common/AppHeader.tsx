import { ChevronLeft, ChevronRight } from "lucide-react";
import vscode from "../../assets/vscode.png";

const menuItems = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

export function AppHeader() {
  return (
    <header className="flex items-center h-8 w-full bg-zinc-900 border-b border-zinc-800 select-none">
      <nav className="flex items-center pl-2 gap-2">
        <img src={vscode} alt="" width={"20px"} height={"20px"} />
        {menuItems.map((item) => (
          <span
            key={item}
            className="text-xs text-zinc-300 font-medium cursor-pointer hover:bg-zinc-800 px-2 py-1 rounded"
          >
            {item}
          </span>
        ))}
      </nav>

      <div className="flex-1 flex justify-center items-center">
        <span className="text-sm font-bold text-zinc-200 tracking-tight">
          Suhrob Kholmurodov
        </span>
        <span className="ml-2 text-xs text-blue-400 font-medium">
          Frontend Developer
        </span>
      </div>
      <div className="flex items-center gap-2 pr-4">
        <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-zinc-800">
          <ChevronLeft size={16} className="text-zinc-400" />
        </button>
        <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-zinc-800">
          <ChevronRight size={16} className="text-zinc-400" />
        </button>
      </div>
    </header>
  );
}
