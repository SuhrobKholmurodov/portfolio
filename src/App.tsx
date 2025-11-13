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
import { FileTabs } from "@/components/common/FileTabs";
import { StatusFooter } from "@/components/common/StatusFooter";

import Welcome from "@/pages/Welcome";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import { Github } from "./pages/Github";
import { FileExplorer } from "@/components/common/FileExplorer";

const filePages = [
  { id: "home", label: "Home.tsx", path: "/explore/home", component: Home },
  { id: "about", label: "About.tsx", path: "/explore/about", component: About },
  {
    id: "contact",
    label: "Contact.tsx",
    path: "/explore/contact",
    component: Contact,
  },
  {
    id: "projects",
    label: "Projects.tsx",
    path: "/explore/projects",
    component: Projects,
  },
];

type FileTab = {
  id: string;
  label: string;
  path: string;
};

function VSCodeLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [openTabs, setOpenTabs] = useState<string[]>(() => {
    const saved = localStorage.getItem("openTabs");
    if (saved) return JSON.parse(saved) as string[];
    return location.pathname.startsWith("/explore") ? [location.pathname] : [];
  });

  const [catFiles, setCatFiles] = useState<FileTab[]>([]);

  const tabData = [
    ...(openTabs
      .map((path) => filePages.find((f) => f.path === path))
      .filter(Boolean) as (typeof filePages)[0][]),
    ...catFiles,
  ];

  function createCatFile() {
    const id = Date.now().toString();
    const newFile: FileTab = {
      id,
      label: "Cat.txt",
      path: `/cat/${id}`,
    };
    setCatFiles((prev) => [...prev, newFile]);
    navigate(newFile.path);
  }

  useEffect(() => {
    if (
      location.pathname.startsWith("/explore") &&
      !openTabs.includes(location.pathname)
    ) {
      const newTabs = [location.pathname, ...openTabs];
      setOpenTabs(newTabs);
      localStorage.setItem("openTabs", JSON.stringify(newTabs));
    }
  }, [location.pathname]);

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

  const [activeSection, setActiveSection] = useState(() =>
    location.pathname.startsWith("/github") ? "github" : "explorer"
  );

  if (activeSection === "github") {
    return (
      <div className="flex flex-col h-screen w-screen bg-background">
        <AppHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex flex-1 min-h-0">
          <MainSidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <Github />
        </div>
        <StatusFooter />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-background">
      <AppHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 min-h-0">
        <MainSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {activeSection === "explorer" && (
          <FileExplorer
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        )}

        <div className="flex-1 flex flex-col min-h-0 bg-background overflow-x-hidden">
          <div className="overflow-x-auto bg-zinc-900">
            <FileTabs
              tabs={tabData}
              activePath={location.pathname}
              setActivePath={navigate}
              onCloseTab={(path) => {
                handleCloseTab(path);
                setCatFiles((prev) => prev.filter((f) => f.path !== path));
              }}
            />
          </div>
          <div className="flex-1 min-h-0 overflow-auto bg-background">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/github" element={<Github />} />
              <Route path="/explore/home" element={<Home />} />
              <Route path="/explore/about" element={<About />} />
              <Route path="/explore/contact" element={<Contact />} />
              <Route path="/explore/projects" element={<Projects />} />
              <Route
                path="/cat/:id"
                element={
                  <div className="p-4">
                    <p>This is a cat text</p>
                    <img
                      src={`https://cataas.com/cat?${Math.random()}`}
                      alt="cat"
                      className="max-w-full h-auto"
                    />
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
      <StatusFooter onCreateCat={createCatFile} />
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
