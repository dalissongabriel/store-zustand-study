import { IOrder } from "@/shared/types/Orders";

interface Props {
  item: IOrder;
}

export default function OrderItem({ item }: Props) {
  return (
    <div className="block border-t-slate-100 border-t-4 p-2 rounded-md">
      <p className="text-gray-700 flex gap-x-2">
        <span className="font-bold">Description: </span>
        {item.description}
      </p>
      <p className="text-gray-700 flex gap-x-2">
        <span className="font-bold">Amount</span>
        {item.amount}
      </p>
    </div>
  );
}
