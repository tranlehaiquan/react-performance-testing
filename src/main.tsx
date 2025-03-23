import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { scan } from "react-scan"; // must be imported before React and React DOM
import App from "./App.tsx";
import "./global.css";

scan({
  enabled: true,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
