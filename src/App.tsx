import { useState } from "react";
import { FileExplorer } from "@/components/common/FileExplorer";
import { FileTabs } from "@/components/common/FileTabs";
import { PageContent } from "@/components/common/PageContent";
import { StatusFooter } from "@/components/common/StatusFooter";
import { AppSidebar } from "./components/common/AppsideBar";
import { AppHeader } from "./components/common/AppHeader";

export default function App() {
  const [activeSection, setActiveSection] = useState("explorer");
  const [openFiles, setOpenFiles] = useState([
    { id: "home", label: "home.js", path: "portfolio/src/pages/home.js" },
  ]);
  const [activeFileId, setActiveFileId] = useState(openFiles[0].id);

  const handleOpenFile = (id: string, label: string, path: string) => {
    if (!openFiles.find((f) => f.id === id)) {
      setOpenFiles([...openFiles, { id, label, path }]);
    }
    setActiveFileId(id);
  };

  const handleCloseTab = (id: string) => {
    const idx = openFiles.findIndex((f) => f.id === id);
    const newFiles = openFiles.filter((f) => f.id !== id);
    setOpenFiles(newFiles);
    if (id === activeFileId) {
      setActiveFileId(newFiles[idx === 0 ? 0 : idx - 1]?.id || "");
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-background">
      <AppHeader />
      <div className="flex flex-1 min-h-0">
        <AppSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        {activeSection === "explorer" ? (
          <FileExplorer
            onOpenFile={handleOpenFile}
            activeFileId={activeFileId}
          />
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
            openFiles={openFiles}
            activeFileId={activeFileId}
            setActiveFileId={setActiveFileId}
            onCloseTab={handleCloseTab}
          />
          <div className="flex-1 min-h-0 overflow-auto bg-background">
            <PageContent id={activeFileId} />
          </div>
        </div>
      </div>
      <StatusFooter />
    </div>
  );
}
