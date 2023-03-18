import Axios from "axios";
import { CreateUser } from "../interface/CreateUser";
import { LoginUser, Response } from "../interface/LoginUser";

const Api = Axios.create({
  baseURL: "http://10.10.10.50:3035/",
});

const ApiRequest = {
  login: async (payload: LoginUser): Promise<Response | null> => {
    let user = await Api.post("/user/login/", payload);
    return user.data;
  },

  PersisteToken: async (token: string | null): Promise<Response | null> => {
    let userValidado = await Api.post(
      "/user/validatetoken",
      {},
      {
        headers: { authorization: token },
      }
    );

    return userValidado.data;
  },

  FindAllUsers: async (
    skip: number,
    take: number,
    token: string
  ): Promise<any> => {
    let Usuarios = await Api.post(
      `/user/findall?skip=${skip}&take=${take}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    return Usuarios.data;
  },

  CreateUser: async (
    Payload: CreateUser | null,
    token: string
  ): Promise<CreateUser | null> => {
    return await Api.post(
      "user/create",
      {
        ...Payload,
        ["IsActive"]: true,
        ["IsHide"]: false,
      },
      {
        headers: { authorization: token },
      }
    );
  },
};

export default ApiRequest;
