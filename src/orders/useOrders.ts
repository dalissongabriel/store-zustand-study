import create from "zustand";
import { httpClient } from "../infra/HttpClient";
import { IOrder } from "./types";

interface Store {
  orders: IOrder[];
  addOrder: (data: IOrder) => void;
  resetOrders: () => void;
  fetchOrders: () => void;
}

export const useStore = create<Store>((set) => ({
  orders: [],
  addOrder: (data) =>
    set((state) => ({ ...state, orders: [...state.orders, data] })),
  resetOrders: () => set((state) => ({ ...state, orders: [] })),
  fetchOrders: async () => {
    try {
      const response = await httpClient.get<IOrder[]>("/orders");
      set((state) => ({
        ...state,
        orders: [...state.orders, ...response.data],
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));
