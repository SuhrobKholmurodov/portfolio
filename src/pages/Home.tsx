import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Box, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-900 h-full">
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
              <BreadcrumbPage className="text-zinc-300">Home</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <main className="flex-grow overflow-auto bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-zinc-100 p-6 min-h-0">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl sm:text-2xl sm:flex sm:justify-center sm:gap-2 font-bold mb-10 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-pulse">
            Suhrob
            <span className="block text-4xl sm:text-2xl md:text-6xl text-zinc-300 mt-2 sm:mt-0">
              Kholmurodov
            </span>
          </h1>

          <div className="bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-cyan-500/10 border border-zinc-700/50 rounded-3xl p-10 sm:p-4 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-500 max-w-2xl mx-auto">
            <div className="flex items-start justify-center gap-4 mb-6">
              <Sparkles className="w-8 sm:w-4 sm:h-4 h-8 text-cyan-400 flex-shrink-0 mt-1 animate-spin-slow" />
              <div className="text-left">
                <h2 className="text-3xl sm:text-xl font-semibold text-zinc-200 mb-3">
                  Frontend Developer & UI Designer
                </h2>
                <p className="text-zinc-300 leading-relaxed text-lg sm:text-[16px]">
                  Transforming ideas into interactive, beautiful web
                  experiences. Focused on clean design, smooth animations, and
                  intuitive interfaces that leave a lasting impression.
                </p>
              </div>
            </div>

            <Link
              to="/explore/projects"
              className="group relative inline-block px-10 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl hover:border-cyan-400 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="relative flex items-center justify-center space-x-3">
                <span className="text-zinc-200 font-semibold text-lg sm:text-sm">
                  View Projects
                </span>
                <span className="text-cyan-400 group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
