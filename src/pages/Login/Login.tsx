import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import {
  BtnLogin,
  DivLogin,
  DivMainlogin,
  InputLogin,
} from "../../styles/LoginStyle";

import Logo from "../../logoLogin.gif";
import { toast } from "react-toastify";

const Login = () => {
  const [payload, SetPayload] = React.useState({ Login: "", Password: "" });
  const [message, setMessage] = React.useState<string | null>(null);
  const { LoginAccount } = useContext(UserContext);

  const HandleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetPayload({ ...payload, [e.target.name]: e.target.value });
    console.log(payload);
  };

  const Navigate = useNavigate();

  const SubmiteLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let user = await LoginAccount(payload)
      .then((a: any) => {
        console.log("aqui");
        toast.success("Logado Com sucesso", {
          theme: "colored",
          icon: "🚀",
        });

        Navigate("/app");
      })
      .catch((e: any) => {
        console.log("entrou aqui");
        console.log(e);
        setMessage(e?.message);
      });
  };

  return (
    <DivMainlogin>
      <DivLogin>
        <img src={Logo} style={{ width: "349px" }} />

        <br />
        <br />

        <div>
          <InputLogin
            id="Login"
            name="Login"
            type="text"
            placeholder="Digite seu Login"
            onChange={HandleChangeLogin}
          />
        </div>
        <div>
          <InputLogin
            id="Password"
            name="Password"
            type="password"
            placeholder="Digite sua senha"
            onChange={HandleChangeLogin}
          />
        </div>
        <div>
          <BtnLogin onClick={SubmiteLogin}>Acessar</BtnLogin>
        </div>

        {message && <p>{message}</p>}
      </DivLogin>
    </DivMainlogin>
  );
};

export default Login;
