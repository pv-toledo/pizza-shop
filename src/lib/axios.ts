import { env } from "@/env";
import axios from "axios";

export const api = axios.create({
  baseURL: env.VITE_API_URL, //URL de base do backend que vem do arquivo de validação com zod
  withCredentials: true, //Envia os cookies do front automaticamente
});

if (env.VITE_ENABLE_API_DELAY) {
    //Intercepta todas as requisições
    //config é o corpo da requisição
    //retorna o corpo da requisição com um delay de 2s
    //usado para simular o tempo de requisição para uma api que não está rodando local
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, Math.round(Math.random()*3000)));

    return config
  });
}
