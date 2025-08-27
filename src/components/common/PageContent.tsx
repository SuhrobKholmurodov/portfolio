export function PageContent({ id }: { id: string }) {
  switch (id) {
    case "home":
      return (
        <div className="p-6">
          <h1 className="text-2xl font-bold text-yellow-200">Home Page</h1>
          <p>Welcome to my VSCode-style portfolio!</p>
        </div>
      );
    case "about":
      return (
        <div className="p-6">
          <h1 className="text-2xl font-bold text-yellow-200">About Me</h1>
          <p>
            I am a developer building cool stuff with React, TypeScript, and
            Tailwind!
          </p>
        </div>
      );
    case "contact":
      return (
        <div className="p-6">
          <h1 className="text-2xl font-bold text-yellow-200">Contact</h1>
          <p>Email: suhrob@example.com</p>
        </div>
      );
    case "project":
      return (
        <div className="p-6">
          <h1 className="text-2xl font-bold text-yellow-200">Projects</h1>
          <p>Check out my awesome projects here!</p>
        </div>
      );
    case "logo":
      return (
        <div className="p-6 flex items-center justify-center h-full">
          <img src="/logo.png" alt="Logo" className="h-32" />
        </div>
      );
    case "readme":
      return (
        <div className="p-6">
          <h1 className="text-2xl font-bold text-yellow-200">README</h1>
          <p>This is my VSCode-like portfolio README file.</p>
        </div>
      );
    default:
      return (
        <div className="p-6">
          <h1 className="text-lg font-bold text-yellow-200">File not found</h1>
        </div>
      );
  }
}
