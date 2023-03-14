import Axios from "axios";
import { LoginUser, Response } from "../interface/LoginUser";

const Api = Axios.create({
  baseURL: "http://10.10.10.50:3035/",
});

const ApiRequest = {
  login: async (payload: LoginUser): Promise<Response | null> => {
    let user = await Api.post("/user/login/", payload);
    return user.data;
  },

  PersisteToken: async (token: string): Promise<Response | null> => {
    let userValidado = await Api.post(
      "/user/validatetoken",
      {},
      {
        headers: { authorization: token },
      }
    );

    return userValidado.data;
  },
};

export default ApiRequest;
