import OrderForm from "./OrderForm";
import OrderList from "./OrderList";

const OrdersScreen = () => {
  return (
    <div className="bg-slate-100 rounded-md p-4 flex flex-col gap-x-10">
      <h2 className="text-3xl mb-4 font-bold text-center text-purple-800">
        Order
      </h2>
      <OrderForm />
      <div className="my-10 h-0.5 bg-slate-300 rounded-sm" />
      <OrderList />
    </div>
  );
};

export default OrdersScreen;
