import { Home, Folder, Mail, ExternalLink, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="h-full flex flex-col px-4 sm:pt-[80px] bg-zinc-950 items-center justify-center">
      <div className="text-center mb-4 sm:mt-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <h1 className="text-3xl font-bold text-zinc-100 mb-2 tracking-tight bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text text-transparent">
          Suhrob Kholmurodov
        </h1>

        <div className="text-zinc-400 mb-1 text-sm font-mono">
          Frontend Developer & UI Enthusiast
        </div>
      </div>
      <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-1 gap-4 mb-40">
        <Link
          to="/home"
          className="flex items-center gap-4 bg-zinc-900/80 hover:bg-zinc-800/60 border border-zinc-800 hover:border-yellow-500/30 px-5 py-4 rounded-xl transition-all duration-300 group hover:scale-[1.02] backdrop-blur-sm"
        >
          <div className="p-2 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
            <Home className="text-yellow-400" size={24} />
          </div>
          <div className="flex-1">
            <div className="text-zinc-200 font-semibold">Home</div>
            <div className="text-zinc-500 text-sm mt-1">
              Overview and introduction
            </div>
          </div>
          <ExternalLink
            size={18}
            className="text-zinc-600 group-hover:text-yellow-400 transition-colors"
          />
        </Link>

        <Link
          to="/about"
          className="flex items-center gap-4 bg-zinc-900/80 hover:bg-zinc-800/60 border border-zinc-800 hover:border-purple-500/30 px-5 py-4 rounded-xl transition-all duration-300 group hover:scale-[1.02] backdrop-blur-sm"
        >
          <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
            <User className="text-purple-400" size={24} />
          </div>
          <div className="flex-1">
            <div className="text-zinc-200 font-semibold">About</div>
            <div className="text-zinc-500 text-sm mt-1">
              Learn more about me and my skills
            </div>
          </div>
          <ExternalLink
            size={18}
            className="text-zinc-600 group-hover:text-purple-400 transition-colors"
          />
        </Link>

        <Link
          to="/projects"
          className="flex items-center gap-4 bg-zinc-900/80 hover:bg-zinc-800/60 border border-zinc-800 hover:border-blue-500/30 px-5 py-4 rounded-xl transition-all duration-300 group hover:scale-[1.02] backdrop-blur-sm"
        >
          <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
            <Folder className="text-blue-400" size={24} />
          </div>
          <div className="flex-1">
            <div className="text-zinc-200 font-semibold">Projects</div>
            <div className="text-zinc-500 text-sm mt-1">
              Explore my work and creations
            </div>
          </div>
          <ExternalLink
            size={18}
            className="text-zinc-600 group-hover:text-blue-400 transition-colors"
          />
        </Link>

        <Link
          to="/contact"
          className="flex items-center gap-4 bg-zinc-900/80 hover:bg-zinc-800/60 border border-zinc-800 hover:border-green-500/30 px-5 py-4 rounded-xl transition-all duration-300 group hover:scale-[1.02] backdrop-blur-sm"
        >
          <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
            <Mail className="text-green-400" size={24} />
          </div>
          <div className="flex-1">
            <div className="text-zinc-200 font-semibold">Contact</div>
            <div className="text-zinc-500 text-sm mt-1">
              Get in touch with me
            </div>
          </div>
          <ExternalLink
            size={18}
            className="text-zinc-600 group-hover:text-green-400 transition-colors"
          />
        </Link>
        <div className="text-xs hidden sm:block text-zinc-600 text-center font-mono">
          © {new Date().getFullYear()} Suhrob Kholmurodov
        </div>
      </div>
    </div>
  );
}
