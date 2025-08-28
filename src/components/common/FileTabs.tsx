import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ReactIcon from "../../assets/react.svg";

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
    <div className="bg-zinc-900 flex items-center h-auto overflow-x-auto scrollbar-hide">
      <style>
        {`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {tabs.map((file) => (
        <div
          key={file.id}
          className={cn(
            "flex items-center px-3 py-[9px] gap-2 cursor-pointer text-xs border-r border-b border-zinc-700 relative group min-w-max flex-shrink-0",
            activePath === file.path
              ? "bg-zinc-800 text-white border-b border-b-zinc-800"
              : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
          )}
          onClick={() => setActivePath(file.path)}
        >
          {activePath === file.path && (
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500" />
          )}
          <img src={ReactIcon} alt="React" className="w-4 h-4 flex-shrink-0" />
          <span className="truncate max-w-[80px] sm:max-w-none">
            {file.label}
          </span>
          <span className="opacity-70 hidden sm:inline">
            {file.path.split("/")[0]}
          </span>

          <Button
            size="icon"
            variant="ghost"
            className={cn(
              "ml-2 h-[20px] w-[20px] rounded-sm hover:bg-zinc-700 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0",
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
