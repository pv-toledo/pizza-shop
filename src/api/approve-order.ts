import { api } from "@/lib/axios";

export interface ApproveOrderParams {
    orderId: string
}

export async function approveOrder ({orderId}: ApproveOrderParams) {
    //Patch pq só vai alterar o status
    await api.patch(`/orders/${orderId}/approve`)
}