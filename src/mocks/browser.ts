import { setupWorker } from "msw";
import combinedHandlers from "@/mocks/handlers";

export const worker = setupWorker(...combinedHandlers);
