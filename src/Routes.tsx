import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Dashboard } from "./pages/app/Dashboard";
import { SignIn } from "./pages/auth/sign-in";

export const router = createBrowserRouter([
  {
    path: "/", //path vazio
    element: <AppLayout />, //mostra o layout
    children: [{ path: "/", element: <Dashboard /> }], //subrota com a rota da página
  },

  {
    path: "/", //path vazio
    element: <AuthLayout />, //mostra o layout
    children: [{ path: "/sign-in", element: <SignIn /> }], //subrota com a rota da página
  },
]);
