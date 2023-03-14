import React from "react";
import { UserContext } from "../../context/UserContext";
import {
  DivCard,
  DivInicioCard,
  DivMainInicio,
} from "../../styles/InicioStyle";

const Inicio = () => {
  const { User } = React.useContext(UserContext);

  return (
    <>
      <DivMainInicio>
        <h1>Bem vindo {User?.Name} </h1>

        <DivInicioCard>
          <DivCard>
            <h2>Total de Atendimentos</h2>
            <h1>0</h1>
          </DivCard>

          <DivCard>
            <h2>Agendados Hoje</h2>
            <h1>0</h1>
          </DivCard>

          <DivCard>
            <h2>Qtd de Clientes</h2>
            <h1>0</h1>
          </DivCard>
        </DivInicioCard>
      </DivMainInicio>
    </>
  );
};

export default Inicio;
