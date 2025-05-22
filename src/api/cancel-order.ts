import { api } from "@/lib/axios";

export interface CancelOrderParams {
    orderId: string
}

export async function cancelOrder ({orderId}: CancelOrderParams) {
    //Patch pq só vai alterar o status
    await api.patch(`/orders/${orderId}/cancel`)
}