import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Mail, Github, Phone, Instagram, Code, Box } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      name: "Email",
      value: "suhrobkholmurodov1@gmail.com",
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      link: "mailto:suhrobkholmurodov1@gmail.com",
    },
    {
      name: "Telegram",
      value: "@suhrob_io",
      icon: <Phone className="w-6 h-6 text-cyan-400" />,
      link: "https://t.me/suhrob_io",
    },
    {
      name: "LeetCode",
      value: "suhrob_io",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      link: "https://leetcode.com/u/suhrob_io",
    },
    {
      name: "GitHub",
      value: "github.com/suhrobKholmurodov",
      icon: <Github className="w-6 h-6 text-cyan-400" />,
      link: "https://github.com/SuhrobKholmurodov",
    },
    {
      name: "Instagram",
      value: "@suhrob_io",
      icon: <Instagram className="w-6 h-6 text-cyan-400" />,
      link: "https://instagram.com/suhrob_io",
    },
  ];

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
              <BreadcrumbPage className="text-zinc-300">Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <main className="flex-grow overflow-auto bg-zinc-900 shadow-md shadow-gray-500 text-zinc-100 p-6 sm:p-4 min-h-0">
        <div className="max-w-[1080px] mx-auto">
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-zinc-800/10 border border-zinc-700/50 rounded-3xl p-8 sm:p-4 mb-10 backdrop-blur-sm">
            <h1 className="text-3xl sm:text-xl font-bold text-cyan-400 mb-4">
              Contact Me
            </h1>
            <p className="text-zinc-300 mb-6">
              Here you can find all the ways to reach me. Feel free to contact
              me for collaborations, questions, or just to say hi!
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-6">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-zinc-800/30 border border-zinc-700/50 rounded-xl backdrop-blur-sm 
                 hover:bg-cyan-900/20 hover:border-cyan-400 hover:shadow-md transition-all duration-300"
                >
                  {contact.icon}
                  <div>
                    <p className="text-zinc-400 text-sm">{contact.name}</p>
                    <p className="text-zinc-200 break-all">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
