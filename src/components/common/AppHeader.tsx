import {
  ChevronLeft,
  ChevronRight,
  LayoutPanelLeft,
  PanelBottom,
  PanelRight,
} from "lucide-react";
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
    <header className="flex items-center h-[35px] w-full bg-zinc-900 border-b border-zinc-800 select-none">
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
        <div className="flex items-center gap-2 pr-4">
          <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-zinc-800">
            <ChevronLeft size={16} className="text-zinc-400" />
          </button>
          <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-zinc-800">
            <ChevronRight size={16} className="text-zinc-400" />
          </button>
        </div>
        <div className="border border-zinc-700 bg-zinc-800 rounded-md px-20 py-[2px] flex gap-2 items-center">
          <span className="text-sm text-zinc-200 tracking-tight">
            Suhrob Kholmurodov
          </span>
          <span className="text-sm text-zinc-200 tracking-tight">|</span>
          <span className="text-xs text-blue-400 font-medium">
            Frontend Developer
          </span>
        </div>
      </div>
      <div className="flex items-center pr-2">
        <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-zinc-800">
          <LayoutPanelLeft size={16} className="text-zinc-100" />
        </button>
        <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-zinc-800">
          <PanelBottom size={16} className="text-zinc-100" />
        </button>
        <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-zinc-800">
          <PanelRight size={16} className="text-zinc-100" />
        </button>
      </div>
    </header>
  );
}
