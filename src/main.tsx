import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { SidebarProvider } from "./components/ui/sidebar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </Provider>
  </StrictMode>
);
