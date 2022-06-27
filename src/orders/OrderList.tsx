import Button from "@/shared/components/Button";
import OrderItem from "@/orders/OrderItem";
import { useStore } from "@/store";

export default function OrderList() {
  const orders = useStore((state) => state.orders);
  const resetOrders = useStore((state) => state.resetOrders);
  const fetchOrders = useStore((state) => state.fetchOrders);

  return (
    <div>
      <div className="flex gap-x-6">
        <Button onClick={fetchOrders}>IMPORT</Button>
        {orders.length > 0 && <Button onClick={resetOrders}>RESET</Button>}
      </div>

      <div className="bg-white flex flex-col">
        {orders.map((item, index) => (
          <OrderItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
