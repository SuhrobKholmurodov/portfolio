import { Github, Folders, Settings, CircleUserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const sidebarIcons = [
  { id: "explorer", icon: <Folders size={24} />, label: "Explorer" },
  { id: "github", icon: <Github size={24} />, label: "GitHub" },
];

const bottomIcons = [
  { id: "profile", icon: <CircleUserRound size={24} />, label: "Profile" },
  { id: "settings", icon: <Settings size={24} />, label: "Settings" },
];

export function MainSidebar({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (id: string) => void;
}) {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    setActiveSection(id);

    if (id === "github") {
      navigate("/github");
    } else if (id === "explorer") {
      navigate("/explore/home");
    }
  };

  return (
    <nav className="bg-zinc-900 border-r border-zinc-500 flex flex-col justify-between h-full items-center">
      <div className="flex flex-col items-center">
        {sidebarIcons.map(({ id, icon, label }) => (
          <Tooltip key={id}>
            <TooltipTrigger asChild>
              <button
                aria-label={label}
                onClick={() => handleClick(id)}
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
            </TooltipTrigger>
            <TooltipContent side="right">{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>

      <div className="flex flex-col items-center">
        {bottomIcons.map(({ id, icon, label }) => (
          <Tooltip key={id}>
            <TooltipTrigger asChild>
              <div className="w-[45px] h-[50px] flex items-center justify-center rounded text-zinc-500 cursor-pointer relative">
                <span className="z-10 sm:text-lg">{icon}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </nav>
  );
}
