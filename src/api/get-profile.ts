import { api } from "@/lib/axios";

interface GetProfileResponse {
  name: string;
  id: string;
  email: string;
  phone: string | null;
  role: "manager" | "customer";
  createdAt: Date | null;
  updatedAt: Date | null;
}

export async function getProfile() {
  const resposnse = await api.get<GetProfileResponse>("/me");

  return resposnse.data;
}
