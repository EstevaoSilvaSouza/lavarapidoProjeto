import React from "react";
import { Routes, Route } from "react-router-dom";
import UserAuthValidate from "../../Hooks/UserAuthValidate";
import Container from "../../pages/Layout/Container/Container";
import Header from "../../pages/Layout/Header/Header";
import Inicio from "../../pages/Painel/Inicio";
import CriarUsuario from "../../pages/Painel/Usuario/CriarUsuario";
import ListarUsuarios from "../../pages/Painel/Usuario/ListarUsuarios";

const RoutersPrivate: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <UserAuthValidate>
                <Inicio />
              </UserAuthValidate>
            }
          />

          <Route
            path="/usuario/lista"
            element={
              <UserAuthValidate role="Admin">
                <ListarUsuarios />
              </UserAuthValidate>
            }
          />

          <Route
            path="/usuario/criar"
            element={
              <UserAuthValidate role="Admin">
                <CriarUsuario />
              </UserAuthValidate>
            }
          />
        </Routes>
      </Container>
    </>
  );
};

export default RoutersPrivate;
