import AuthHandlers from "@/mocks/handlers/AuthHandlers";
import ordersHandlers from "@/mocks/handlers/OrdersHandlers";

const handlers = [...ordersHandlers, ...AuthHandlers];

export default handlers;
