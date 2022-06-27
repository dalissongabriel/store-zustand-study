import { baseURL } from "@/infra/HttpClient";
import successLoginJson from "@/mocks/jsons/success-login.json";
import { rest } from "msw";

const AuthHandlers = [
  rest.post(`${baseURL}/authentication/login`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(successLoginJson), ctx.delay(500));
  }),
  rest.post(`${baseURL}/authentication/logout`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500));
  }),
];

export default AuthHandlers;
