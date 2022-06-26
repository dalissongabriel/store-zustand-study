import { httpClient } from "@/infra/HttpClient";
import { IOrder } from "@/features/orders/types";

export async function fetchOrders() {
  return httpClient.get<IOrder[]>("/orders");
}
