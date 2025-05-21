import { env } from '@/env'
import axios from 'axios'

const api = axios.create({
    baseURL: env.VITE_API_URL, //URL de base do backend que vem do arquivo de validação com zod
})