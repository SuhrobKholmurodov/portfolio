import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FileTab = {
  id: string;
  label: string;
  path: string;
};

export function FileTabs({
  tabs,
  activePath,
  setActivePath,
  onCloseTab,
}: {
  tabs: FileTab[];
  activePath: string;
  setActivePath: (id: string) => void;
  onCloseTab: (id: string) => void;
}) {
  return (
    <div className="bg-zinc-900 border-b flex items-center h-auto">
      {tabs.map((file) => (
        <div
          key={file.id}
          className={cn(
            "flex items-center px-3 py-[10px] gap-2 cursor-pointer text-xs border-r border-zinc-700 relative group",
            activePath === file.path
              ? "bg-zinc-800 text-yellow-200"
              : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
          )}
          onClick={() => setActivePath(file.path)}
        >
          {activePath === file.path && (
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500" />
          )}

          <span className="font-semibold">{file.label}</span>
          <span className="opacity-70">{file.path.split("/")[0]}</span>

          <Button
            size="icon"
            variant="ghost"
            className={cn(
              "ml-2 h-[20px] w-[20px] rounded-sm hover:bg-zinc-700 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity",
              activePath === file.path &&
                "opacity-100 hover:bg-zinc-600 text-white hover:text-white"
            )}
            onClick={(e) => {
              e.stopPropagation();
              onCloseTab(file.path);
            }}
          >
            <X size={10} />
          </Button>
        </div>
      ))}
    </div>
  );
}
