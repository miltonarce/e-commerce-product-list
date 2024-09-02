import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ProductProvider from "@/providers/Product/ProductProvider";

createRoot(document.getElementById("root")!).render(
  <ProductProvider>
    <App />
  </ProductProvider>,
);
