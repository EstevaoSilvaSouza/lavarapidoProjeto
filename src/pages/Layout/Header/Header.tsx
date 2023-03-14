import React from "react";
import { DivMainHeader } from "../../../styles/HeaderStyel";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <DivMainHeader>
      <h1>LavaSplash</h1>
      <ul>
        <Link to={"/app"}>
          <li>Incio</li>
        </Link>
        <Link to={"/app"}>
          <li>Serviços</li>
        </Link>
        <Link to={"/app"}>
          <li>Agendar</li>
        </Link>
        <Link to={"/app"}>
          <li>Clientes</li>
        </Link>
      </ul>

      <Link to={"/app"}>
        <li color={"blue"}>SAIR</li>
      </Link>
    </DivMainHeader>
  );
};

export default Header;
