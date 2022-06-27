import { httpClient } from "@/infra/HttpClient";
import { ILoginResponse, IUserLogin, IUserLogout } from "@/shared/types/User";

async function login(data: IUserLogin) {
  return httpClient.post<ILoginResponse>("/authentication/login", data);
}

async function logout(data: IUserLogout) {
  return httpClient.post("/authentication/logout", data);
}

const AuthAPI = {
  login,
  logout,
};

export default AuthAPI;
