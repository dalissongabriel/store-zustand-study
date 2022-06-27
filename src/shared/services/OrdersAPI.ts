import { httpClient } from "@/infra/HttpClient";
import { IOrder } from "@/shared/types/Orders";

async function fetchOrders() {
  return httpClient.get<IOrder[]>("/orders");
}

const OrdersAPI = {
  fetchOrders,
};

export default OrdersAPI;
