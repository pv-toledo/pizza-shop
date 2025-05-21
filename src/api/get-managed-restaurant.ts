import { api } from "@/lib/axios";

interface GetManagedRestaurantResponse {
  name: string;
  id: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  managerId: string | null;
}

export async function getManagedRestaurant() {
  const resposnse = await api.get<GetManagedRestaurantResponse>("/managed-restaurant");

  return resposnse.data;
}
