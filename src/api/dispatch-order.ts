import { api } from "@/lib/axios";

export interface DispatchOrderParams {
    orderId: string
}

export async function dispatchOrder ({orderId}: DispatchOrderParams) {
    //Patch pq só vai alterar o status
    await api.patch(`/orders/${orderId}/dispatch`)
}