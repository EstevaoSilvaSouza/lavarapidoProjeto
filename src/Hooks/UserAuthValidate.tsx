import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Login from "../pages/Login/Login";

const UserAuthValidate = ({ children }: { children: JSX.Element }) => {
  const { User } = useContext(UserContext);

  if (User) {
    return children;
  }

  return <Login />;
};

export default UserAuthValidate;
