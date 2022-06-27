import { SubmitHandler, useForm } from "react-hook-form";

import Button from "@/shared/components/Button";
import HelperText from "@/shared/components/HelperText";
import InputLabel from "@/shared/components/InputLabel";
import Page from "@/shared/components/Page";
import PageContainer from "@/shared/components/PageContainer";
import { IOrder } from "@/shared/types/Orders";
import { useGlobalStore } from "@/store";
import { useNavigate } from "react-router-dom";

export default function AddOrderScreen() {
  const navigate = useNavigate();
  const addOrder = useGlobalStore((state) => state.addOrder);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrder>();

  const submitHandler: SubmitHandler<IOrder> = async (data) => {
    await addOrder(data);
    navigate("/orders");
  };

  return (
    <Page isPrivatePage pageTitle="Create Order">
      <PageContainer>
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
      </PageContainer>
    </Page>
  );
}
