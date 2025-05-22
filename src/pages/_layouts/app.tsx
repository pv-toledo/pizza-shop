import { Header } from "@/components/header";
import { api } from "@/lib/axios";
import { isAxiosError } from "axios";
import { useEffect } from "react";
import { Outlet, replace, useNavigate } from "react-router-dom";

export function AppLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    //Se der não autorizado, ou seja, o usuário nao está logado, redireciona para a página de login
    const interceptorId = api.interceptors.response.use(
      response => response,
      error => {
        //Dessa forma o axios faz a tipagem do erro
        if (isAxiosError(error)) {
          const status = error.response?.status

          //code é uma feature no back-end que retorna um código personalizado de erro
          const code = error.response?.data.code

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/sign-in', {replace: true})
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }, [navigate])

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
 