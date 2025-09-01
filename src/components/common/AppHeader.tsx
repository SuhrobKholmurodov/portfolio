import { useLocation } from "react-router-dom";
import {
  LayoutPanelLeft,
  PanelBottom,
  PanelRight,
  ChevronLeft,
  ChevronRight,
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

interface AppHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function AppHeader({ sidebarOpen, setSidebarOpen }: AppHeaderProps) {
  const location = useLocation();

  const isGithubPage =
    location.pathname === "/github" || location.pathname === "/";

  let buttonIcon;
  if (isGithubPage) {
    buttonIcon = <img src={vscode} alt="VSCode" className="w-5 h-5" />;
  } else if (sidebarOpen) {
    buttonIcon = <ChevronLeft size={28} className="text-zinc-300" />;
  } else {
    buttonIcon = <ChevronRight size={28} className="text-zinc-300" />;
  }

  return (
    <header className="flex items-center h-[35px] sm:px-3 w-full bg-zinc-900 border-b border-zinc-800 select-none">
      <button
        className="sm:block sm:z-50 hidden p-1 ml-[-6px] hover:bg-zinc-800 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {buttonIcon}
      </button>

      <nav className="flex items-center sm:hidden pl-2 gap-2">
        <img src={vscode} alt="VSCode" width={20} height={20} />
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
        <div className="border border-zinc-700 bg-zinc-800 rounded-md px-[120px] sm:px-2 py-[2px] flex gap-2 items-center">
          <span className="text-xs text-zinc-200 tracking-tight">
            Suhrob Kholmurodov
          </span>
          <span className="text-xs text-zinc-200 tracking-tight">|</span>
          <span className="text-xs text-blue-400 font-medium">
            Frontend Developer
          </span>
        </div>
      </div>

      <div className="flex items-center pr-2">
        <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-zinc-800">
          <LayoutPanelLeft size={16} className="text-zinc-100" />
        </button>
        <button className="w-7 h-7 sm:hidden flex items-center justify-center rounded hover:bg-zinc-800">
          <PanelBottom size={16} className="text-zinc-100" />
        </button>
        <button className="w-7 h-7 flex sm:hidden items-center justify-center rounded hover:bg-zinc-800">
          <PanelRight size={16} className="text-zinc-100" />
        </button>
      </div>
    </header>
  );
}
