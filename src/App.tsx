import { RouterProvider } from "react-router-dom";

import { router } from "./Routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Shop" /> {/* %s recebe um título variável de acordo com a página */}
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
