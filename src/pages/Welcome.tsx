import { Home, Folder, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-zinc-950">
      <div className="text-2xl font-bold text-zinc-200 mb-2 text-center tracking-tight">
        Suhrob Kholmurodov Portfolio
      </div>
      <div className="text-zinc-400 mb-8 text-center text-sm">
        VSCode-inspired developer workspace.
        <br />
        Explore my work, projects, and contact info in a familiar environment.
      </div>
      <div className="w-full max-w-sm flex flex-col gap-4 mb-8">
        <Link
          to="/home"
          className="flex items-center gap-3 bg-zinc-900/60 border border-zinc-800 hover:border-yellow-400 px-4 py-3 rounded-lg transition group"
        >
          <Home className="text-yellow-200" size={22} />
          <span className="text-zinc-300 font-semibold">Home</span>
          <ExternalLink
            size={16}
            className="ml-auto text-zinc-500 group-hover:text-yellow-300"
          />
        </Link>
        <Link
          to="/projects"
          className="flex items-center gap-3 bg-zinc-900/60 border border-zinc-800 hover:border-blue-400 px-4 py-3 rounded-lg transition group"
        >
          <Folder className="text-blue-300" size={22} />
          <span className="text-zinc-300 font-semibold">Projects</span>
          <ExternalLink
            size={16}
            className="ml-auto text-zinc-500 group-hover:text-blue-300"
          />
        </Link>
        <Link
          to="/contacts"
          className="flex items-center gap-3 bg-zinc-900/60 border border-zinc-800 hover:border-green-400 px-4 py-3 rounded-lg transition group"
        >
          <Mail className="text-green-400" size={22} />
          <span className="text-zinc-300 font-semibold">Contacts</span>
          <ExternalLink
            size={16}
            className="ml-auto text-zinc-500 group-hover:text-green-400"
          />
        </Link>
      </div>
      <div className="text-zinc-400 text-sm mb-10 text-center max-w-md">
        <span className="font-semibold text-zinc-300">Note: </span>
        Search functionality (Ctrl + P) is not available yet. <br />
        Please use the sidebar or the links above to navigate between sections.
      </div>

      <div className="text-xs text-zinc-600 mt-10 text-center">
        <br />© Suhrob Kholmurodov
      </div>
    </div>
  );
}
