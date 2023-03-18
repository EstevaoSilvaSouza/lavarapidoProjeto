import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ApiRequest from "../../../Hooks/Api";
import { CreateUser } from "../../../interface/CreateUser";
import { UserContext } from "../../../context/UserContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CriarUsuario: React.FC = () => {
  const [payload, SetPayload] = React.useState<CreateUser | null>(null);
  const [options, SetOptions] = React.useState<string[]>([
    "Normal",
    "Admin",
    "Agente",
    "Coordenador",
    "Padrao",
  ]);

  const { Token } = React.useContext(UserContext);
  const nav = useNavigate();

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    SetPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const HandleChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    SetPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const SubmitedForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await ApiRequest.CreateUser(payload, Token!)
      .then((e: any) => {
        toast.success(e?.data?.Mensagem, {
          theme: "colored",
          icon: "🚀",
          pauseOnHover: true,
        });
        nav("/app/usuario/lista");
        console.log(`Criado com sucesso`, e);
      })
      .catch((e: any) => {
        toast.error(e?.response.data.Mensagem, {
          theme: "colored",
          icon: "🚀",
        });
        console.log(e);
      });
  };

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <Container fluid>
        <br />
        <h1>Cadastro de Usuario</h1>
        <br />
        <Form className="px-5" onSubmit={SubmitedForm}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                onChange={HandleChange}
                type="text"
                name="Name"
                placeholder="Digite seu Nome"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Sobronome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu Sobrenome"
                name="LastName"
                onChange={HandleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridType">
              <Form.Label>Tipo</Form.Label>
              <Form.Select
                defaultValue="0"
                name="Type"
                onChange={HandleChangeSelect}
              >
                <option disabled value={"0"}>
                  Escolha tipo.
                </option>
                {options.map((e: string) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={HandleChange}
                  type="email"
                  name="Email"
                  placeholder="Digite o E-mail"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Digite a Senha"
                  name="Password"
                  onChange={HandleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLogin">
                <Form.Label>Login</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o login"
                  name="Login"
                  onChange={HandleChange}
                />
              </Form.Group>
            </Row>
          </Row>

          <br />
          <Button variant="primary" type="submit">
            Criar Usuario
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default CriarUsuario;
