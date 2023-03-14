import React from "react";
import { Routes, Route } from "react-router-dom";
import UserAuthValidate from "../../Hooks/UserAuthValidate";
import Container from "../../pages/Layout/Container/Container";
import Header from "../../pages/Layout/Header/Header";
import Inicio from "../../pages/Painel/Inicio";

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
        </Routes>
      </Container>
    </>
  );
};

export default RoutersPrivate;
