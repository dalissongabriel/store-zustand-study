import create from "zustand";

import { fetchOrders } from "@/shared/services/OrdersAPI";
import { IOrder } from "@/features/orders/types";

interface Store {
  orders: IOrder[];
  addOrder: (data: IOrder) => void;
  resetOrders: () => void;
  fetchOrders: () => void;
}

export const useOrders = create<Store>((set) => ({
  orders: [],
  addOrder: (data) =>
    set((state) => ({ ...state, orders: [...state.orders, data] })),
  resetOrders: () => set((state) => ({ ...state, orders: [] })),
  fetchOrders: async () => {
    try {
      const response = await fetchOrders();
      set((state) => ({
        ...state,
        orders: [...state.orders, ...response.data],
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));
