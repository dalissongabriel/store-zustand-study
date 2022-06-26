import { httpClient } from "@/infra/HttpClient";
import { IOrder } from "@/features/orders/types";

async function fetchOrders() {
  return httpClient.get<IOrder[]>("/orders");
}

const OrdersAPI = {
  fetchOrders,
};

export default OrdersAPI;
