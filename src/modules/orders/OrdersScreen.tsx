import Button from "@/shared/components/Button";
import Page from "@/shared/components/Page";
import PageContainer from "@/shared/components/PageContainer";
import { useGlobalStore } from "@/store";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import OrderItem from "./OrderItem";

export default function OrdersScreen() {
  const navigate = useNavigate();
  const orders = useGlobalStore((state) => state.orders);
  const resetOrders = useGlobalStore((state) => state.resetOrders);
  const fetchOrders = useGlobalStore((state) => state.fetchOrders);

  const handleCreate = useCallback(() => {
    navigate("/orders/add");
  }, []);

  return (
    <Page isPrivatePage pageTitle="Orders list">
      <PageContainer>
        <div>
          <div className="flex gap-x-6">
            <Button onClick={handleCreate}>CREATE</Button>
            <Button onClick={fetchOrders}>IMPORT</Button>
            {orders.length > 0 && <Button onClick={resetOrders}>RESET</Button>}
          </div>

          <div className="bg-white flex flex-col">
            {orders.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
          </div>
        </div>
      </PageContainer>
    </Page>
  );
}
