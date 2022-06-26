import create from "zustand";

import OrdersAPI from "@/shared/services/OrdersAPI";
import { IOrder } from "@/features/orders/types";

interface OrdersState {
  orders: IOrder[];
  addOrder: (data: IOrder) => void;
  resetOrders: () => void;
  fetchOrders: () => void;
}

export const useOrders = create<OrdersState>((set) => ({
  // initial state
  orders: [],
  // "reducers"
  addOrder: (data: IOrder) =>
    set((state) => ({ ...state, orders: [...state.orders, data] })),

  resetOrders: () => set((state) => ({ ...state, orders: [] })),

  fetchOrders: async () => {
    try {
      const response = await OrdersAPI.fetchOrders();
      set((state) => ({
        ...state,
        orders: [...state.orders, ...response.data],
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));
