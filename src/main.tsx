import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { SidebarProvider } from "./components/ui/sidebar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </HelmetProvider>
    </Provider>
  </StrictMode>
);
