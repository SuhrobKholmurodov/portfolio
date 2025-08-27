/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChevronDown,
  ChevronRight,
  FileText,
  FileCode2,
  Folder,
} from "lucide-react";
import { useState } from "react";

const treeData = [
  {
    label: "Portfolio",
    children: [
      {
        label: "algorithms",
        icon: <Folder size={16} />,
        children: [
          {
            label: "easy",
            icon: <Folder size={16} />,
            children: [
              {
                label: "main.js",
                id: "mainjs-easy",
                icon: <FileCode2 size={14} />,
              },
            ],
          },
          {
            label: "hard",
            icon: <Folder size={16} />,
            children: [
              {
                label: "main.js",
                id: "mainjs-hard",
                icon: <FileCode2 size={14} />,
              },
            ],
          },
          {
            label: "medium",
            icon: <Folder size={16} />,
            children: [
              {
                label: "main.js",
                id: "mainjs-medium",
                icon: <FileCode2 size={14} />,
              },
            ],
          },
        ],
      },
      { label: "README.md", id: "readme", icon: <FileText size={14} /> },
    ],
  },
];

export function FileExplorer({
  onOpenFile,
  activeFileId,
}: {
  onOpenFile: (id: string, label: string, path: string) => void;
  activeFileId: string;
}) {
  return (
    <aside className="w-60 bg-zinc-950 border-r border-zinc-800 overflow-auto text-sm pt-2">
      <div className="font-bold text-xs px-3 mb-2 text-zinc-300 tracking-tight">
        EXPLORER
      </div>
      <div className="">
        {treeData.map((node, i) => (
          <TreeNodeView
            key={node.label + i}
            node={node}
            parentPath=""
            onOpenFile={onOpenFile}
            activeFileId={activeFileId}
          />
        ))}
      </div>
    </aside>
  );
}

function TreeNodeView({
  node,
  parentPath,
  onOpenFile,
  activeFileId,
}: {
  node: any;
  parentPath: string;
  onOpenFile: (id: string, label: string, path: string) => void;
  activeFileId: string;
}) {
  const [open, setOpen] = useState(true);
  const path = parentPath ? `${parentPath}/${node.label}` : node.label;

  if (node.children) {
    return (
      <div>
        <button
          type="button"
          className="w-full flex items-center gap-1 px-2 py-1 font-semibold text-zinc-200 hover:bg-zinc-800 rounded select-none"
          onClick={() => setOpen((o) => !o)}
          style={{
            background: "none",
            border: "none",
            outline: "none",
          }}
        >
          {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          {node.icon}
          <span>{node.label}</span>
        </button>
        {open && (
          <div className="ml-4">
            {node.children.map((child: any, i: number) => (
              <TreeNodeView
                key={child.label + i}
                node={child}
                parentPath={path}
                onOpenFile={onOpenFile}
                activeFileId={activeFileId}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // File
  return (
    <button
      type="button"
      className={`w-full flex items-center gap-2 px-2 py-1 rounded text-zinc-300 hover:bg-zinc-800 select-none ${
        activeFileId === node.id ? "bg-zinc-800 text-white" : ""
      }`}
      onClick={() => node.id && onOpenFile(node.id, node.label, path)}
      style={{
        background: activeFileId === node.id ? "#23272e" : "none",
        border: "none",
        outline: "none",
      }}
    >
      {node.icon}
      <span>{node.label}</span>
    </button>
  );
}
