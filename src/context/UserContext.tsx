import { createContext } from "react";
import { IUserMap, LoginUser, Response } from "../interface/LoginUser";

type UserContextType = {
  User: IUserMap | null;
  Token: string | null;
  Message: string | null;

  LoginAccount(payload: LoginUser): Promise<boolean>;
  ValidateToken(token: string): Promise<IUserMap | null>;
};

export const UserContext = createContext<UserContextType>(null!);
