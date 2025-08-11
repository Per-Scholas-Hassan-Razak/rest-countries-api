import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CssBaseline } from "@mui/material";
import CountryBUProvider from "./providers/CountryBUProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <CountryBUProvider>
      <App />
    </CountryBUProvider>
  </StrictMode>
);
