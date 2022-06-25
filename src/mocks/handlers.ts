import { rest } from "msw";

export const handlers = [
  rest.get("/api/orders", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json([
        {
          description: "Foo",
          amount: 1,
        },
        {
          description: "Bar",
          amount: 2,
        },
        {
          description: "Lorem",
          amount: 3,
        },
        {
          description: "Ipsum",
          amount: 4,
        },
      ])
    );
  }),
];
