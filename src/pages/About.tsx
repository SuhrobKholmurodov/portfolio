import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import {
  User,
  Code,
  Palette,
  MapPin,
  Briefcase,
  Calendar,
  Box,
} from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col bg-zinc-900 h-full">
      <style>
        {`
          .overflow-auto::-webkit-scrollbar {
            width: 10px;
          }
          
          .overflow-auto::-webkit-scrollbar-track {
            background: rgba(39, 39, 42, 0.3);
            border-radius: 5px;
          }
          
          .overflow-auto::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #0891b2, #0e7490);
            border-radius: 5px;
            border: 2px solid rgba(0, 0, 0, 0.2);
          }
          
          .overflow-auto::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #06b6d4, #0891b2);
          }
          
          .overflow-auto {
            scrollbar-width: thin;
            scrollbar-color: #0891b2 rgba(39, 39, 42, 0.3);
          }
        `}
      </style>

      <nav aria-label="Breadcrumb" className="pl-3 py-2">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center space-x-1 text-zinc-300 text-sm font-mono">
            <BreadcrumbItem className="hover:text-white">
              <BreadcrumbLink className="hover:text-white" asChild>
                <Link to={"/"}>Portfolio</Link>
              </BreadcrumbLink>
              <BreadcrumbSeparator>{">"}</BreadcrumbSeparator>
            </BreadcrumbItem>
            <BreadcrumbItem className="flex items-center space-x-1">
              <Box className="w-4 h-4 text-violet-600" />
              <BreadcrumbPage className="text-zinc-300">About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <main className="flex-grow overflow-auto bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-zinc-100 p-4 sm:p-6 min-h-0">
        <div className="max-w-[1080px] mx-auto">
          <div className="bg-gradient-to-r from-blue-900/20 via-zinc-800/20 to-black/20 border border-zinc-700/50 rounded-3xl p-6 sm:p-4 mb-6 sm:mb-10 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <User className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-xl sm:text-xl font-semibold text-zinc-200 mb-4">
                  About Me
                </h3>
                <p className="text-zinc-300 leading-relaxed text-base sm:text-lg mb-4">
                  Hey! I'm a frontend developer from Dushanbe, Tajikistan. I
                  specialize in JavaScript/TypeScript and the React ecosystem,
                  creating modern, responsive web applications with clean UI/UX
                  design.
                </p>
                <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                  I'm focused on frontend development with React, but I also
                  have experience working with backend technologies like Node.js
                  and databases for my personal projects.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-1 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="flex items-center gap-3 bg-zinc-800/40 p-3 sm:p-4 rounded-xl">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-zinc-400 text-xs sm:text-sm">Location</p>
                  <p className="text-zinc-200 text-sm sm:text-base">
                    Dushanbe, Tajikistan
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-zinc-800/40 p-3 sm:p-4 rounded-xl">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-zinc-400 text-xs sm:text-sm">
                    Current Role
                  </p>
                  <p className="text-zinc-200 text-sm sm:text-base">
                    Frontend Developer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-zinc-800/40 p-3 sm:p-4 rounded-xl">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-zinc-400 text-xs sm:text-sm">Experience</p>
                  <p className="text-zinc-200 text-sm sm:text-base">
                    Almost 2 years
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-800/20 via-zinc-800/20 to-black/20 border border-zinc-700/50 rounded-3xl p-6 sm:p-4 mb-6 sm:mb-10 backdrop-blur-sm">
            <h3 className="text-xl sm:text-xl font-semibold text-zinc-200 mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              Experience
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2"></div>
                  <div className="w-0.5 h-full bg-cyan-400/30 mt-1"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-semibold text-zinc-200">
                    Frontend Developer
                  </h4>
                  <p className="text-cyan-400 mb-2 text-sm sm:text-base">
                    Local Company
                  </p>
                  <p className="text-zinc-300 text-sm sm:text-base">
                    Currently working at a local company where I develop and
                    maintain responsive web applications using modern frontend
                    technologies. Focused on creating intuitive user interfaces
                    and seamless user experiences.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-zinc-700/50 px-2 py-1 rounded-md text-xs sm:text-sm text-cyan-300">
                      React
                    </span>
                    <span className="bg-zinc-700/50 px-2 py-1 rounded-md text-xs sm:text-sm text-blue-300">
                      TypeScript
                    </span>
                    <span className="bg-zinc-700/50 px-2 py-1 rounded-md text-xs sm:text-sm text-cyan-300">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 via-zinc-800/20 to-black/20 border border-zinc-700/50 rounded-3xl p-6 sm:p-4 mb-6 sm:mb-10 backdrop-blur-sm">
            <h3 className="text-xl sm:text-xl font-semibold text-zinc-200 mb-6 flex items-center gap-2">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              Core Technologies
            </h3>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
              {[
                {
                  src: "js-icon.svg",
                  alt: "JavaScript",
                  label: "JavaScript",
                  bg: "bg-blue-800/20",
                },
                {
                  src: "ts-icon.svg",
                  alt: "TypeScript",
                  label: "TypeScript",
                  bg: "bg-blue-700/20",
                },
                {
                  src: "react-icon.svg",
                  alt: "React",
                  label: "React",
                  bg: "bg-cyan-700/20",
                },
                {
                  src: "redux-icon.svg",
                  alt: "Redux",
                  label: "Redux",
                  bg: "bg-cyan-700/20",
                },
              ].map((tech) => (
                <div
                  key={tech.label}
                  className="flex flex-col items-center group"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 ${tech.bg} rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}
                  >
                    <img
                      src={`https://techstack-generator.vercel.app/${tech.src}`}
                      alt={tech.alt}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </div>
                  <span className="text-zinc-300 text-xs sm:text-sm">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-800/20 via-zinc-800/20 to-black/20 border border-zinc-700/50 rounded-3xl p-6 sm:p-4 mb-6 sm:mb-10 backdrop-blur-sm">
            <h3 className="text-xl sm:text-xl font-semibold text-zinc-200 mb-6 flex items-center gap-2">
              <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              Frontend Technologies & UI Libraries
            </h3>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4">
              {[
                { name: "HTML", color: "text-blue-400" },
                { name: "CSS", color: "text-blue-300" },
                { name: "Sass", color: "text-cyan-300" },
                { name: "Bootstrap", color: "text-blue-500" },
                { name: "Tailwind", color: "text-cyan-400" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="bg-zinc-700/40 px-3 py-1 sm:px-4 sm:py-2 rounded-lg flex items-center gap-2"
                >
                  <span
                    className={`${tech.color} font-bold text-xs sm:text-sm`}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-6">
              <h4 className="text-base sm:text-lg font-semibold text-zinc-300 mb-3 sm:mb-4 text-center">
                UI Libraries & Component Frameworks
              </h4>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {[
                  { name: "Material UI", color: "text-blue-400" },
                  { name: "shadcn/ui", color: "text-cyan-400" },
                  { name: "Ant Design", color: "text-blue-300" },
                ].map((lib) => (
                  <div
                    key={lib.name}
                    className="bg-zinc-700/40 px-3 py-1 sm:px-4 sm:py-2 rounded-lg flex items-center gap-2"
                  >
                    <span
                      className={`${lib.color} font-bold text-xs sm:text-sm`}
                    >
                      {lib.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
