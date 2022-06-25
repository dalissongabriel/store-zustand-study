import { useStore } from "./useOrders";

const OrderList = () => {
  const orders = useStore((state) => state.orders);
  const resetOrders = useStore((state) => state.resetOrders);
  const fetchOrders = useStore((state) => state.fetchOrders);

  function handleReset() {
    resetOrders();
  }

  function handleImport() {
    fetchOrders();
  }

  return (
    <div>
      <div className="flex gap-x-6">
        <button
          onClick={handleImport}
          className="bg-purple-600 my-6 p-2 px-10 text-white rounded-md hover:bg-purple-800 focus:bg-purple-800 outline-none "
        >
          IMPORT
        </button>
        {orders.length > 0 && (
          <button
            onClick={handleReset}
            className="bg-purple-600 my-6 p-2 px-10 text-white rounded-md hover:bg-purple-800 focus:bg-purple-800 outline-none "
          >
            RESET
          </button>
        )}
      </div>

      <div className="bg-white flex flex-col">
        {orders.map((item, index) => (
          <div
            key={index}
            className="block border-t-slate-100 border-t-4 p-2 rounded-md"
          >
            <p className="text-gray-700 flex gap-x-2">
              <span className=" font-bold">Description: </span>
              {item.description}
            </p>
            <p className="text-gray-700 flex gap-x-2">
              <span className="font-bold">Amount: </span>
              {item.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
