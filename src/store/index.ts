import create from "zustand";
import { IOrderSlice, createOrderSlice } from "@/store/OrderSlice";
import { IUserSlice, createUserSlice } from "@/store/UserSlice";

type IGlobalStore = IOrderSlice & IUserSlice;

export const useGlobalStore = create<IGlobalStore>()((...a) => ({
  ...createOrderSlice(...a),
  ...createUserSlice(...a),
}));
