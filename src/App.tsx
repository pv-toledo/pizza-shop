import { RouterProvider } from "react-router-dom";

import { router } from "./Routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | Pizza Shop" />{" "}
        {/* %s recebe um título variável de acordo com a página */}
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
