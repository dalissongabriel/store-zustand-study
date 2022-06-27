import AuthAPI from "@/shared/services/AuthAPI";
import { IUser, IUserLogin, IUserLogout } from "@/shared/types/User";
import { StateCreator } from "zustand";

export interface IUserSlice {
  user: IUser;
  login: (data: IUserLogin) => void;
  logout: (data: IUserLogout) => void;
  reloadAuthentication: () => void;
}

export const createUserSlice: StateCreator<IUserSlice, [], []> = (set) => ({
  // initial state
  user: {},
  // "actions"
  reloadAuthentication: () => {
    const authentication = localStorage.getItem("authentication");
    if (authentication) {
      const data: IUser = JSON.parse(authentication);

      set((state) => ({
        ...state,
        user: { ...data },
      }));
    }
  },
  login: async (data) => {
    try {
      const response = await AuthAPI.login(data);
      localStorage.setItem(
        "authentication",
        JSON.stringify({
          email: data.email,
          authToken: response.data.token,
        })
      );
      set((state) => ({
        ...state,
        user: { email: data.email, authToken: response.data.token },
      }));
    } catch (error) {
      console.log(error);
    }
  },
  logout: async (data) => {
    try {
      await AuthAPI.logout(data);
      localStorage.removeItem("authentication");
      set((state) => ({
        ...state,
        user: { email: "" },
      }));
    } catch (error) {
      console.log(error);
    }
  },
});
