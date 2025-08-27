import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FileTab = {
  id: string;
  label: string;
  path: string;
};

export function FileTabs({
  openFiles,
  activeFileId,
  setActiveFileId,
  onCloseTab,
}: {
  openFiles: FileTab[];
  activeFileId: string;
  setActiveFileId: (id: string) => void;
  onCloseTab: (id: string) => void;
}) {
  return (
    <div className="bg-zinc-900 border-b flex items-center h-8 overflow-x-auto">
      {openFiles.map((file) => (
        <div
          key={file.id}
          className={cn(
            "flex items-center px-3 py-1 gap-2 cursor-pointer text-xs border-r border-zinc-800",
            activeFileId === file.id
              ? "bg-zinc-800 text-yellow-200"
              : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
          )}
          onClick={() => setActiveFileId(file.id)}
        >
          <span className="font-semibold">{file.label}</span>
          <span className="opacity-70">{file.path.split("/")[0]}</span>
          <Button
            size="icon"
            variant="ghost"
            className="ml-2"
            onClick={(e) => {
              e.stopPropagation();
              onCloseTab(file.id);
            }}
          >
            <X size={14} />
          </Button>
        </div>
      ))}
    </div>
  );
}
