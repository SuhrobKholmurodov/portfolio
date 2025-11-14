import { Home, Folder, Mail, ExternalLink, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const links = [
  {
    label: "Home",
    desc: "Overview and introduction",
    icon: <Home size={24} className="text-yellow-400" />,
    theme: {
      bg: "bg-yellow-400/10 hover:bg-yellow-400/20",
      border: "hover:border-yellow-500/60",
      icon: "group-hover:text-yellow-400",
    },
    href: "home",
  },
  {
    label: "About",
    desc: "Learn more about me and my skills",
    icon: <User size={24} className="text-purple-400" />,
    theme: {
      bg: "bg-purple-500/10 hover:bg-purple-500/20",
      border: "hover:border-purple-500/60",
      icon: "group-hover:text-purple-400",
    },
    href: "about",
  },
  {
    label: "Projects",
    desc: "Explore my work and creations",
    icon: <Folder size={24} className="text-blue-400" />,
    theme: {
      bg: "bg-blue-500/10 hover:bg-blue-500/20",
      border: "hover:border-blue-500/60",
      icon: "group-hover:text-blue-400",
    },
    href: "projects",
  },
  {
    label: "Contact",
    desc: "Get in touch with me",
    icon: <Mail size={24} className="text-green-400" />,
    theme: {
      bg: "bg-green-500/10 hover:bg-green-500/20",
      border: "hover:border-green-500/60",
      icon: "group-hover:text-green-400",
    },
    href: "contact",
  },
];

export default function Welcome() {
  const baseUrl = "explore/";

  return (
    <div className="h-full flex flex-col px-4 sm:pt-[80px] bg-zinc-950 items-center justify-center">
      <Helmet>
        <title>Welcome | Suhrob Kholmurodov</title>
      </Helmet>

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
          <Link
            key={link.label}
            to={baseUrl + link.href}
            className={`flex items-center gap-4 bg-zinc-900/80 border border-zinc-800 px-5 py-4 
              rounded-xl transition-all duration-300 group hover:scale-[1.02] backdrop-blur-sm 
              ${link.theme.border}`}
          >
            <div
              className={`p-2 rounded-lg transition-colors ${link.theme.bg}`}
            >
              {link.icon}
            </div>

            <div className="flex-1">
              <div className="text-zinc-200 font-semibold">{link.label}</div>
              <div className="text-zinc-500 text-sm mt-1">{link.desc}</div>
            </div>

            <ExternalLink
              size={18}
              className={`text-zinc-600 transition-colors ${link.theme.icon}`}
            />
          </Link>
        ))}

        <div className="text-xs hidden sm:block text-zinc-600 text-center font-mono">
          © {new Date().getFullYear()} Suhrob Kholmurodov
        </div>
      </div>
    </div>
  );
}
