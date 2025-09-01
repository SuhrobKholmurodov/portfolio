/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChevronDown,
  ChevronRight,
  Files,
  Folder,
  FolderPlus,
  RotateCw,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReactIcon from "../../assets/react.svg";

const treeData = [
  {
    label: "Portfolio",
    children: [
      {
        label: "Home.tsx",
        id: "home",
        path: "/explore/home",
      },
      {
        label: "About.tsx",
        id: "about",
        path: "/explore/about",
      },
      {
        label: "Contact.tsx",
        id: "contact",
        path: "/explore/contact",
      },
      {
        label: "Projects.tsx",
        id: "projects",
        path: "/explore/projects",
      },
    ],
  },
];

interface FileExplorerProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function FileExplorer({
  sidebarOpen,
  setSidebarOpen,
}: FileExplorerProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(true);

  return (
    <>
      <aside
        className={`w-60 sm:w-48 bg-zinc-950 border-r border-zinc-800 overflow-auto text-sm pt-2  
          ${sidebarOpen ? "sm:block" : "sm:hidden"}
          ${"sm:w-auto sm:z-40"}`}
      >
        <div className="font-bold flex items-center justify-between text-xs sm:text-sm px-3 mb-2 text-zinc-300 tracking-tight">
          <p>EXPLORER </p>
          <div className="hover:bg-zinc-800 px-1 pb-2 rounded hover:cursor-auto">
            . . .
          </div>
        </div>
        <div>
          <div className="flex items-center pr-2">
            <button
              type="button"
              className="w-full flex items-center gap-1 px-2 py-[2px] sm:py-[4px] font-semibold text-zinc-200  rounded select-none"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              <Folder className="text-[#f5d165] fill-[#f5d165]" size={16} />
              <span className="text-sm sm:text-sm">Portfolio</span>
            </button>
            <div className="flex items-center hover:cursor-auto gap-3 text-zinc-200 hover:bg-zinc-800 p-1 rounded cursor-pointer">
              <FolderPlus className="w-4 h-4 sm:w-[14px] sm:h-[14px]" />
            </div>
            <div className="flex items-center hover:cursor-auto gap-3 text-zinc-200 hover:bg-zinc-800 p-1 rounded cursor-pointer">
              <RotateCw className="w-4 h-4 sm:w-[14px] sm:h-[14px]" />
            </div>
            <div
              onClick={() => setOpen((o) => !o)}
              className="flex items-center hover:cursor-pointer gap-3 text-zinc-200 hover:bg-zinc-800 p-1 rounded cursor-pointer"
            >
              <Files className="w-4 h-4 sm:w-[14px] sm:h-[14px]" />
            </div>
          </div>
          {open && (
            <div>
              {treeData[0].children.map((file: any) => (
                <button
                  key={file.id}
                  type="button"
                  className={`w-full pl-[34px] flex items-center gap-2 py-[2px] sm:py-[4px] text-zinc-300 hover:bg-zinc-800 select-none ${
                    location.pathname === file.path
                      ? "bg-zinc-700 hover:bg-zinc-700 text-white"
                      : "text-zinc-400"
                  }`}
                  onClick={() => {
                    navigate(file.path);
                    setSidebarOpen(false);
                  }}
                >
                  <img src={ReactIcon} alt="React" className="w-4 h-4" />
                  <span className="text-sm sm:text-base">{file.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="sm:block hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
