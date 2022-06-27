import { httpClient } from "@/shared/services/HttpClient";
import { IOrder } from "@/shared/types";

async function fetchOrders() {
  return httpClient.get<IOrder[]>("/orders");
}

const OrdersAPI = {
  fetchOrders,
};

export default OrdersAPI;
