import Button from "@/shared/components/Button";
import HelperText from "@/shared/components/HelperText";
import InputLabel from "@/shared/components/InputLabel";
import { IUserLogin } from "@/shared/types/User";
import { useGlobalStore } from "@/store";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Page from "@/shared/components/Page";
import PageContainer from "@/shared/components/PageContainer";

export default function LoginScreen() {
  const navigate = useNavigate();
  const login = useGlobalStore((state) => state.login);
  const user = useGlobalStore((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>();

  const submitHandler: SubmitHandler<IUserLogin> = (data) => {
    login(data);
  };

  useEffect(() => {
    if (user && user.authToken) {
      navigate("/orders");
    }
  }, [user]);

  return (
    <Page>
      <PageContainer>
        <main className="flex flex-col w-full justify-center items-center mb-20">
          <h1 className="mt-6 font-bold text-purple-600 text-2xl mb-12">
            Welcome
          </h1>
          <form
            className="flex flex-col max-w-md w-full justify-center items-center mt-6"
            onSubmit={handleSubmit(submitHandler)}
            noValidate
          >
            <div className="mb-6 w-full">
              <InputLabel htmlFor="email">E-mail</InputLabel>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="E-mail ..."
                className={`border py-2 pl-4 w-full rounded-sm ${
                  !!errors.email ? "outline-red-300" : "outline-purple-300"
                }
                ${!!errors.email && "border-red-500"}`}
                {...register("email", { required: true })}
              />
              {errors.email && <HelperText>This field is required</HelperText>}
            </div>
            <div className="mb-6 w-full">
              <InputLabel htmlFor="password">Password</InputLabel>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password ..."
                className={`border py-2 pl-4 w-full rounded-sm ${
                  !!errors.password ? "outline-red-300" : "outline-purple-300"
                }
                ${!!errors.password && "border-red-500"}`}
                {...register("password", { required: true })}
              />
              {errors.password && (
                <HelperText>This field is required</HelperText>
              )}
            </div>
            <Button type="submit" fullWidth>
              Sign In
            </Button>
          </form>
        </main>
        <section />
      </PageContainer>
    </Page>
  );
}
