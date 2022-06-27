export interface IUserLogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface IUserLogout {
  email: string;
}

export type IUser = {
  email?: string;
  authToken?: string;
};
