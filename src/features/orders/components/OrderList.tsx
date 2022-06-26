import Button from "@/shared/components/Button";
import { useOrders } from "@/features/orders/useOrders";
import { OrderItem } from "@/features/orders/components";

export default function OrderList() {
  const orders = useOrders((state) => state.orders);
  const resetOrders = useOrders((state) => state.resetOrders);
  const fetchOrders = useOrders((state) => state.fetchOrders);

  function handleReset() {
    resetOrders();
  }

  function handleImport() {
    fetchOrders();
  }

  return (
    <div>
      <div className="flex gap-x-6">
        <Button onClick={handleImport}>IMPORT</Button>
        {orders.length > 0 && <Button onClick={handleReset}>RESET</Button>}
      </div>

      <div className="bg-white flex flex-col">
        {orders.map((item, index) => (
          <OrderItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
