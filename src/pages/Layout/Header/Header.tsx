import React from "react";
import { DivMainHeader } from "../../../styles/HeaderStyel";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { UserContext } from "../../../context/UserContext";
const Header: React.FC = () => {
  const { User } = React.useContext(UserContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LavaRapido Surf</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to={"/app"}
              style={{ fontWeight: "bolder", color: "#fff" }}
            >
              Inicio
            </Nav.Link>

            <NavDropdown title="Usuario" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"usuario/lista"}>
                Listar Usuarios
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"usuario/criar"}>
                Criar Usuario
              </NavDropdown.Item>
              {User?.Type == "Admin" && (
                <>
                  <NavDropdown.Item href="#action/3.3">
                    Log Acesso
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Auditoria
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>

            <NavDropdown title="Cliente" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className={"btn btn-primary"} as={Link} to={"/"}>
              Suporte{" "}
            </Nav.Link>
            <p> {".."}</p>
            <Nav.Link
              className={"btn btn-danger"}
              style={{ width: "120px" }}
              as={Link}
              to={"/"}
            >
              Sair
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    /* -- ANTIGO HEADER DEIXAR AQUI PARA DOCUMENTAR SE PRECISAR !!
    <DivMainHeader>
      <h1>LavaSplash</h1>
      <ul>
        <Link to={"/app"}>
          <li>Incio</li>
        </Link>
        <Link to={"/app"}>
          <li>Usuarios</li>
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

    */
  );
};

export default Header;
