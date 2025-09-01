import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { AppHeader } from "@/components/common/AppHeader";
import { MainSidebar } from "@/components/common/MainSidebar";
import { FileExplorer } from "@/components/common/FileExplorer";
import { FileTabs } from "@/components/common/FileTabs";
import { StatusFooter } from "@/components/common/StatusFooter";

import Welcome from "@/pages/Welcome";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import About from "@/pages/About";

const filePages = [
  { id: "home", label: "Home.tsx", path: "/home", component: Home },
  { id: "about", label: "About.tsx", path: "/about", component: About },
  {
    id: "contact",
    label: "Contact.tsx",
    path: "/contact",
    component: Contact,
  },
  {
    id: "projects",
    label: "Projects.tsx",
    path: "/projects",
    component: Projects,
  },
];

function VSCodeLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const [openTabs, setOpenTabs] = useState<string[]>(() => {
    const saved = localStorage.getItem("openTabs");
    if (saved) return JSON.parse(saved) as string[];
    return location.pathname === "/" ? [] : [location.pathname];
  });
  const [, setLastPath] = useState(() => {
    const saved = localStorage.getItem("lastPath");
    return saved || (location.pathname === "/" ? "" : location.pathname);
  });

  useEffect(() => {
    const savedLastPath = localStorage.getItem("lastPath");
    const savedTabs = JSON.parse(localStorage.getItem("openTabs") || "[]");

    if (savedLastPath && savedTabs.includes(savedLastPath)) {
      navigate(savedLastPath, { replace: true });
    } else if (savedTabs.length > 0) {
      navigate(savedTabs[0], { replace: true });
    }
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      localStorage.setItem("lastPath", location.pathname);
      setLastPath(location.pathname);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/" && !openTabs.includes(location.pathname)) {
      setOpenTabs((prev) => {
        const next = [...prev, location.pathname];
        localStorage.setItem("openTabs", JSON.stringify(next));
        return next;
      });
    }
  }, [location.pathname, openTabs]);

  const handleCloseTab = (path: string) => {
    setOpenTabs((tabs) => {
      const newTabs = tabs.filter((p) => p !== path);
      localStorage.setItem("openTabs", JSON.stringify(newTabs));

      if (location.pathname === path) {
        if (newTabs.length > 0) {
          navigate(newTabs[newTabs.length - 1]);
        } else {
          navigate("/");
        }
      }
      return newTabs;
    });
  };

  const tabData = openTabs
    .map((path) => filePages.find((f) => f.path === path))
    .filter(Boolean) as (typeof filePages)[0][];

  const [activeSection, setActiveSection] = useState("explorer");

  return (
    <div className="flex flex-col h-screen w-screen bg-background">
      <AppHeader />
      <div className="flex flex-1 min-h-0">
        <MainSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        {activeSection === "explorer" ? (
          <FileExplorer />
        ) : activeSection === "search" ? (
          <aside className="w-60 bg-zinc-950 border-r text-sm pt-2 flex flex-col">
            <div className="font-bold text-xs px-3 mb-2 text-zinc-300 tracking-tight">
              SEARCH
            </div>
            <div className="px-3 text-zinc-400">Search UI coming soon...</div>
          </aside>
        ) : activeSection === "github" ? (
          <aside className="w-60 bg-zinc-950 border-r text-sm pt-2 flex flex-col">
            <div className="font-bold text-xs px-3 mb-2 text-zinc-300 tracking-tight">
              GITHUB
            </div>
            <div className="px-3 text-zinc-400">
              GitHub info and links here...
            </div>
          </aside>
        ) : null}
        <div className="flex-1 flex flex-col min-h-0 bg-background">
          <FileTabs
            tabs={tabData}
            activePath={location.pathname}
            setActivePath={navigate}
            onCloseTab={handleCloseTab}
          />
          <div className="flex-1 min-h-0 overflow-auto bg-background">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
      <StatusFooter />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <VSCodeLayout />
    </BrowserRouter>
  );
}
