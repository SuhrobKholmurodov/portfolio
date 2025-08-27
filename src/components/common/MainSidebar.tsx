import { Search, Github, Folders } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarIcons = [
  { id: "explorer", icon: <Folders size={24} />, label: "Explorer" },
  { id: "search", icon: <Search size={24} />, label: "Search" },
  { id: "github", icon: <Github size={24} />, label: "GitHub" },
];

export function MainSidebar({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (id: string) => void;
}) {
  return (
    <nav className="bg-zinc-900 border-r border-zinc-500 flex flex-col items-center">
      {sidebarIcons.map(({ id, icon, label }) => (
        <button
          key={id}
          aria-label={label}
          onClick={() => setActiveSection(id)}
          className={cn(
            "mb-2 w-[45px] h-[50px] flex items-center justify-center rounded transition-colors outline-none border-none relative",
            activeSection === id
              ? "bg-zinc-900 text-gray-100"
              : "bg-zinc-900 text-zinc-500 hover:text-white"
          )}
          tabIndex={0}
        >
          {activeSection === id && (
            <span className="absolute left-0 top-0 h-full w-[2px] bg-blue-500" />
          )}
          <span className="z-10">{icon}</span>
        </button>
      ))}
    </nav>
  );
}
