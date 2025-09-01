/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronDown, ChevronRight, Folder } from "lucide-react";
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
          ${"sm:fixed sm:inset-y sm:z-40"}`}
      >
        <div className="font-bold text-xs px-3 mb-2 text-zinc-300 tracking-tight">
          EXPLORER
        </div>
        <div className="">
          <button
            type="button"
            className="w-full flex items-center gap-1 px-2 py-[2px] font-semibold text-zinc-200 hover:bg-zinc-800 rounded select-none"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <Folder className="text-[#f5d165] fill-[#f5d165]" size={16} />
            <span className="text-sm sm:text-xs">Portfolio</span>
          </button>
          {open && (
            <div className="">
              {treeData[0].children.map((file: any) => (
                <button
                  key={file.id}
                  type="button"
                  className={`w-full pl-[34px] flex items-center gap-2 py-[2px] text-zinc-300 hover:bg-zinc-800 select-none ${
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
                  <span className="text-sm sm:text-xs">{file.label}</span>
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
