import { Search, Github, Folders, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarIcons = [
  { id: "explorer", icon: <Folders size={24} />, label: "Explorer" },
  { id: "search", icon: <Search size={24} />, label: "Search" },
  { id: "github", icon: <Github size={24} />, label: "GitHub" },
];

const bottomIcons = [
  { id: "settings", icon: <Settings size={24} />, label: "Settings" },
  { id: "profile", icon: <User size={24} />, label: "Profile" },
];

export function MainSidebar({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (id: string) => void;
}) {
  return (
    <nav className="bg-zinc-900 border-r border-zinc-500 flex flex-col justify-between h-full items-center">
      <div className="mt-2 flex flex-col items-center">
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
            <span className="z-10 sm:text-lg">{icon}</span>
          </button>
        ))}
      </div>

      <div className="mb-2 flex flex-col items-center">
        {bottomIcons.map(({ id, icon, label }) => (
          <div
            key={id}
            aria-label={label}
            className="mb-2 w-[45px] h-[50px] flex items-center justify-center rounded text-zinc-500 cursor-default relative"
          >
            <span className="z-10 sm:text-lg">{icon}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}
