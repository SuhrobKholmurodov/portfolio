import { Home, Folder, Mail, ExternalLink, User } from "lucide-react";

const links = [
  {
    label: "Home",
    desc: "Overview and introduction",
    icon: <Home size={24} className="text-yellow-400" />,
    bg: "bg-yellow-400/10 group-hover:bg-yellow-400/20",
    href: "home",
  },
  {
    label: "About",
    desc: "Learn more about me and my skills",
    icon: <User size={24} className="text-purple-400" />,
    bg: "bg-purple-500/10 group-hover:bg-purple-500/20",
    href: "about",
  },
  {
    label: "Projects",
    desc: "Explore my work and creations",
    icon: <Folder size={24} className="text-blue-400" />,
    bg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    href: "projects",
  },
  {
    label: "Contact",
    desc: "Get in touch with me",
    icon: <Mail size={24} className="text-green-400" />,
    bg: "bg-green-500/10 group-hover:bg-green-500/20",
    href: "contact",
  },
];

export default function Welcome() {
  const baseUrl = "explore/";

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
        {links.map((link) => (
          <a
            key={link.label}
            href={baseUrl + link.href}
            className="flex items-center gap-4 bg-zinc-900/80 hover:bg-zinc-800/60 border border-zinc-800 px-5 py-4 rounded-xl transition-all duration-300 group hover:scale-[1.02] backdrop-blur-sm hover:border-yellow-500/30"
          >
            <div className={`p-2 rounded-lg ${link.bg} transition-colors`}>
              {link.icon}
            </div>
            <div className="flex-1">
              <div className="text-zinc-200 font-semibold">{link.label}</div>
              <div className="text-zinc-500 text-sm mt-1">{link.desc}</div>
            </div>
            <ExternalLink
              size={18}
              className="text-zinc-600 group-hover:text-yellow-400 transition-colors"
            />
          </a>
        ))}
        <div className="text-xs hidden sm:block text-zinc-600 text-center font-mono">
          © {new Date().getFullYear()} Suhrob Kholmurodov
        </div>
      </div>
    </div>
  );
}
