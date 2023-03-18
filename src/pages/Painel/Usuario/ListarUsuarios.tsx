import React from "react";
import { Alert, Container, Pagination, Table } from "react-bootstrap";
import { UserContext } from "../../../context/UserContext";
import ApiRequest from "../../../Hooks/Api";

type pagination = {
  qtdPaginas?: number;
  IndiceReference?: number;
};

const ListarUsuarios: React.FC = () => {
  ///Lembra de criar os Types dos Usuarios quem vem na request!!
  const [users, SetUsers] = React.useState<any>();
  const [QtdPagina, SetQtdPagina] = React.useState<pagination[] | null>();
  const { Token } = React.useContext(UserContext);
  let valuDefaul = 0;

  const UpdateData = async (skip: number, take: number) => {
    //Chamar API para buscar os usuarios e passar o skip e take..
    let request = await ApiRequest.FindAllUsers(skip, take, Token!);

    //Verificar se chegou algo e depois tratar para table e paginação!
    if (request) {
      SetUsers(request?.Users);
      let arr: any[] = [];
      for (let i = 1; i <= request?.QtdPaginas - 1; i++) {
        valuDefaul += 5;
        arr.push({ qtdPaginas: i, IndiceReference: valuDefaul });
      }
      SetQtdPagina(arr);
    }
  };

  React.useEffect(() => {
    UpdateData(0, 5);
  }, []);

  return (
    <div>
      <br />
      <Alert key={"info"} variant={"info"}>
        <>Lista de Usuarios - Atualizado em {new Date().toLocaleString()}</>
      </Alert>
      <div
        style={{
          width: "100vw",
        }}
      >
        {users ? (
          <>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>Sobronome</th>
                  <th>Email</th>
                  <th>Login</th>
                  <th>Password</th>
                  <th>Status</th>
                  <th>Invisivel</th>
                  <th>Tipo</th>
                  <th>Atualizado em</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((e: any) => (
                  <tr key={e?.Id}>
                    <td>{e?.Id}</td>
                    <td>{e?.Name}</td>
                    <td>{e?.LastName}</td>
                    <td>{e?.Email}</td>
                    <td>{e?.Login}</td>
                    <td>{e?.Password}</td>
                    <td>{e?.IsActive ? "Ativo" : "Bloqueado"}</td>
                    <td>{e?.IsHide ? "Sim" : "Nao"}</td>
                    <td>{e?.Type}</td>
                    <td>{e?.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        ) : (
          <>
            <h1>Sem dados no momento :(</h1>
          </>
        )}

        <Pagination>
          <Pagination.Prev
            onClick={async () => {
              await UpdateData(valuDefaul - 5 == 0 ? 0 : valuDefaul - 5, 5);
            }}
          />
          <>
            <Pagination.Item key={"default"} onClick={() => UpdateData(0, 5)}>
              {0}
            </Pagination.Item>
            {QtdPagina?.map((e) => (
              <Pagination.Item
                key={e?.qtdPaginas}
                onClick={() => UpdateData(Number(e?.IndiceReference), 5)}
              >
                {e?.qtdPaginas}
              </Pagination.Item>
            ))}
          </>
          <Pagination.Next
            onClick={() => {
              console.log("ok");
            }}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default ListarUsuarios;
