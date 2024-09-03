import { createRoot } from "react-dom/client";
import { SnackbarProvider } from "notistack";
import App from "./App.tsx";
import ProductProvider from "@/providers/Product/ProductProvider";
import "./assets/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <SnackbarProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </SnackbarProvider>,
);
