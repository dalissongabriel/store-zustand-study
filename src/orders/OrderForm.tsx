import { useForm, SubmitHandler } from "react-hook-form";

import { HelperText, Button, InputLabel } from "@/shared/components";
import { IOrder } from "@/shared/types";
import { useStore } from "@/store";

export default function OrderForm() {
  const addOrder = useStore((state) => state.addOrder);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrder>();

  const submitHandler: SubmitHandler<IOrder> = (data) => {
    addOrder(data);
  };

  return (
    <div className="bg-white p-6">
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <div className="mb-6">
          <InputLabel htmlFor="description">Description:</InputLabel>
          <textarea
            id="description"
            className="border py-2 pl-4 w-full rounded-sm outline-purple-300"
            placeholder="Order description ..."
            {...register("description", { required: true })}
          />
          {errors.description && (
            <HelperText>This field is required</HelperText>
          )}
        </div>
        <div className="my-6">
          <InputLabel htmlFor="amount">Amount:</InputLabel>
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
        <Button type="submit">SUBMIT</Button>
      </form>
    </div>
  );
}
