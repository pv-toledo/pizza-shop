import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";

import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import { Orders } from "./pages/app/orders/orders";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { NotFound } from "./pages/404";
import { Error } from "./pages/error";

export const router = createBrowserRouter([
  {
    path: "/", //path vazio
    element: <AppLayout />, //mostra o layout
    errorElement: <Error />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/orders", element: <Orders /> },
    ], //subrota com a rota da página
  },

  {
    path: "/", //path vazio
    element: <AuthLayout />, //mostra o layout
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },

  {
    //Se entrar em qualquer endereço que nao foi declarado nas rotas vai mandar o not found
    path: '#',
    element: <NotFound />
  }
]);
