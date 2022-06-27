import { rest } from "msw";
import { baseURL } from "@/shared/services/HttpClient";
import orderListJson from "@/mocks/jsons/orders-list-valid.json";

const OrdersHandlers = [
  rest.get(`${baseURL}/orders`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(orderListJson), ctx.delay(500));
  }),
];

export default OrdersHandlers;
