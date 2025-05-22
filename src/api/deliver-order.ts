import { api } from "@/lib/axios";

export interface DeliverOrderParams {
    orderId: string
}

export async function deliverOrder ({orderId}: DeliverOrderParams) {
    //Patch pq só vai alterar o status
    await api.patch(`/orders/${orderId}/deliver`)
}