/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronDown, ChevronRight, FileCode2, Folder } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const treeData = [
  {
    label: "Portfolio",
    icon: <Folder size={16} />,
    children: [
      {
        label: "Home.tsx",
        id: "home",
        icon: <FileCode2 size={14} />,
        path: "/home",
      },
      {
        label: "Contacts.tsx",
        id: "contacts",
        icon: <FileCode2 size={14} />,
        path: "/contacts",
      },
      {
        label: "Projects.tsx",
        id: "projects",
        icon: <FileCode2 size={14} />,
        path: "/projects",
      },
    ],
  },
];

export function FileExplorer() {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(true);

  return (
    <aside className="w-60 bg-zinc-950 border-r border-zinc-800 overflow-auto text-sm pt-2">
      <div className="font-bold text-xs px-3 mb-2 text-zinc-300 tracking-tight">
        EXPLORER
      </div>
      <div className="">
        <button
          type="button"
          className="w-full flex items-center gap-1 px-2 py-1 font-semibold text-zinc-200 hover:bg-zinc-800 rounded select-none"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          <Folder size={16} />
          <span>Portfolio</span>
        </button>
        {open && (
          <div className="ml-4">
            {treeData[0].children.map((file: any) => (
              <button
                key={file.id}
                type="button"
                className={`w-full flex items-center gap-2 px-2 py-1 rounded text-zinc-300 hover:bg-zinc-800 select-none ${
                  location.pathname === file.path
                    ? "bg-zinc-800 text-white"
                    : ""
                }`}
                onClick={() => navigate(file.path)}
              >
                {file.icon}
                <span>{file.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
