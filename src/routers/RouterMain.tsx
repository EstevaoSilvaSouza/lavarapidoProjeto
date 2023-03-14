import { Routes, Route } from "react-router-dom";
import UserAuthValidate from "../Hooks/UserAuthValidate";
import Login from "../pages/Login/Login";
import RoutersPrivate from "./PrivateRoute/RoutersPrivata";

const RouterMain: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/app/*"
        element={
          <UserAuthValidate>
            <RoutersPrivate />
          </UserAuthValidate>
        }
      />
    </Routes>
  );
};

export default RouterMain;
