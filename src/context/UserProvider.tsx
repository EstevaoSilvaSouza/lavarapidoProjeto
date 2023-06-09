import React from "react";
import ApiRequest from "../Hooks/Api";
import { IUserMap, LoginUser, Response } from "../interface/LoginUser";

import { UserContext } from "./UserContext";

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [User, setUser] = React.useState<IUserMap | null>(null);
  const [Token, setToken] = React.useState<string | null>(null);
  const [Message, setMesage] = React.useState<string | null>(null);

  React.useEffect(() => {
    Validate();
  }, []);

  const Validate = async () => {
    const token = localStorage.getItem("Token");
    if (token) {
      let valid = await ValidateToken(token);
      if (valid) {
        setUser(valid);
        setToken(token);
      }
    }
  };

  //Função para realizar login!!
  let LoginAccount = async (payload: LoginUser): Promise<boolean> => {
    let userData = await ApiRequest.login(payload);

    if (userData) {
      localStorage.setItem("Token", userData.Token);
      setToken(userData.Token);
      setUser(userData?.User);
      return true;
    }

    setMesage("Falha ao realizar login!");
    return false;
  };

  let ValidateToken = async (Token: string): Promise<IUserMap | null> => {
    let userData = await ApiRequest.PersisteToken(Token);
    return userData ? userData.User : null;
  };

  return (
    <UserContext.Provider
      value={{ User, Token, LoginAccount, ValidateToken, Message }}
    >
      {children}
    </UserContext.Provider>
  );
};
