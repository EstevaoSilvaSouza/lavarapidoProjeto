import React, { Children, useContext } from "react";
import { UserContext } from "../context/UserContext";
import Login from "../pages/Login/Login";

const UserAuthValidate = ({
  children,
  role,
}: {
  children: JSX.Element;
  role?: string;
}) => {
  const { User } = useContext(UserContext);

  if (!User) {
    return <Login />;
  }

  return children;
};

export default UserAuthValidate;
