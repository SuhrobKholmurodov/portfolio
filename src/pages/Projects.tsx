import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Box, Folder, Code, Globe, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import ReactIcon from "../assets/react.svg";

export default function Projects() {
  const projects = [
    {
      name: "Coffee-Shop",
      description:
        "A speedy and intuitive website for browsing and ordering your favorite coffee",
      code: "https://github.com/SuhrobKholmurodov/coffee-shop",
      live: "https://cafe-nest.vercel.app/",
    },
    {
      name: "MonkeyType",
      description:
        "A minimalistic typing test site to improve your typing skills and track your progress. Inspired by https://monkeytype.com",
      code: "https://github.com/SuhrobKholmurodov/monkeytype",
      live: "https://monkeytypegame.vercel.app/",
    },
    {
      name: "React-Pizza",
      description: "A fast and user-friendly React app for ordering pizzas",
      code: "https://github.com/SuhrobKholmurodov/react-pizza",
      live: "https://react-ts-pizzahouse.vercel.app/",
    },
    {
      name: "CommitterStop-TJ",
      description:
        "Website highlighting the most active GitHub users in Tajikistan's developer community",
      code: "https://github.com/SuhrobKholmurodov/committerstop-tj",
      live: "https://committerstop-tj.vercel.app",
    },
    {
      name: "FileSharing-App",
      description:
        "Simple React app for fast and easy file sharing with stylish UI and localStorage support",
      code: "https://github.com/SuhrobKholmurodov/filesharing-app",
      live: "https://react-filesharing-app.vercel.app/",
    },
  ];

  const [visible, setVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col bg-zinc-900 h-full relative overflow-hidden">
      <nav aria-label="Breadcrumb" className="pl-3 py-2 relative z-10">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center space-x-1 text-zinc-300 text-sm font-mono">
            <BreadcrumbItem className="hover:text-white group">
              <BreadcrumbLink className="hover:text-white" asChild>
                <Link
                  to={"/"}
                  className="flex items-center gap-1 transition-all duration-300"
                >
                  Portfolio
                </Link>
              </BreadcrumbLink>
              <BreadcrumbSeparator>{">"}</BreadcrumbSeparator>
            </BreadcrumbItem>

            <BreadcrumbItem className="flex items-center space-x-1 group">
              <img
                src={ReactIcon}
                alt="React icon"
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12"
              />
              <BreadcrumbLink
                className="hover:text-white hover:cursor-auto transition-all duration-300"
                asChild
              >
                <Link to={"/projects"}>Projects.tsx</Link>
              </BreadcrumbLink>
              <BreadcrumbSeparator>{">"}</BreadcrumbSeparator>
            </BreadcrumbItem>

            <BreadcrumbItem className="flex items-center space-x-1 group">
              <Box className="w-4 h-4 text-violet-600 transition-transform duration-300 group-hover:rotate-12" />
              <BreadcrumbPage className="text-zinc-300 transition-all duration-300">
                Projects
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <main className="flex-grow overflow-auto bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-zinc-100 p-6 min-h-0 relative z-10">
        <div className="max-w-[1080px] mx-auto">
          <div className="flex items-center gap-3 mb-8 group">
            <h1 className="text-4xl font-bold bg-clip-text text-blue-400 duration-700">
              Projects
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`relative flex flex-col p-6 bg-zinc-800/40 border border-zinc-700/50 rounded-3xl backdrop-blur-sm
                  transform transition-all duration-500 ease-out overflow-hidden group
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }
                  hover:scale-[1.02] hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20`}
                onMouseEnter={() => setHoveredCard(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-400/10 transform rotate-45 translate-x-8 -translate-y-8 group-hover:bg-cyan-400/20 transition-colors duration-300"></div>
                </div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="relative">
                    <Folder className="w-7 h-7 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  <h2 className="text-xl font-semibold text-zinc-200 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]">
                    {project.name}
                  </h2>
                </div>
                <p className="text-zinc-300 mb-5 transition-all duration-300 group-hover:text-zinc-100 relative z-10">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-auto relative z-10 pt-4 border-t border-zinc-700/50 group-hover:border-cyan-400/30 transition-colors duration-300">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 group/code"
                  >
                    <div className="relative">
                      <Code className="w-5 h-5 animate-pulse-slow" />
                      <div className="absolute inset-0 bg-cyan-400/20 rounded-full scale-0 transition-transform duration-300"></div>
                    </div>
                    <span>Code</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/code:opacity-100 transition-opacity duration-300" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 group/live"
                  >
                    <div className="relative">
                      <Globe className="w-5 h-5 animate-spin-slow" />
                      <div className="absolute inset-0 bg-cyan-400/20 rounded-full scale-0 transition-transform duration-300"></div>
                    </div>
                    <span>Live</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/live:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-600 transition-all duration-500 ${
                    hoveredCard === index ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
