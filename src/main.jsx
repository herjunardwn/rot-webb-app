import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "@/index.css";
import App from "@/App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
      <Toaster
        position='top-right'
        toastOptions={{
          style: {
            background: "#121212",
            color: "#fff",
            border: "1px solid #ff4f8b",
            borderRadius: "12px",
          },
          success: {
            iconTheme: {
              primary: "#ff4f8b",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
    </HelmetProvider>
  </StrictMode>,
);
