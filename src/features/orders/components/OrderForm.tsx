import { useForm } from "react-hook-form";

import { HelperText, Button } from "@/shared/components";

import { IOrder } from "@/features/orders/types";
import { useOrders } from "@/features/orders/useOrders";

export default function OrderForm() {
  const addOrder = useOrders((state) => state.addOrder);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrder>();

  function onSubmit(data: IOrder) {
    addOrder(data);
  }

  return (
    <div className="bg-white p-6">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700">
            Description:
          </label>

          <textarea
            id="description"
            className="border py-2 pl-4 w-full rounded-sm outline-purple-300"
            placeholder="Order description ..."
            required
            {...register("description", { required: true })}
          />
          {errors.description && (
            <HelperText>This field is required</HelperText>
          )}
        </div>
        <div className="my-6">
          <label htmlFor="amount" className="block text-gray-700">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            min={1}
            max={10}
            placeholder="0"
            className="border py-2 pl-4 w-full rounded-sm outline-purple-300"
            {...register("amount", { required: true })}
          />
          {errors.amount && <HelperText>This field is required</HelperText>}
        </div>
        <Button
          type="submit"
          className="bg-purple-600 my-6 p-2 text-white w-full rounded-md hover:bg-purple-800 focus:bg-purple-800 outline-none "
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
}