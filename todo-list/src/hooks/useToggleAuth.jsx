import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const useToggleAuth = () => {
  const navigate = useNavigate();

  const authorizationContext = useContext(AuthContext);

  const authorizationContextHandler = (path) => {
    authorizationContext.toggleAuthorization();
    navigate(path);
  };

  return [authorizationContext.isAuthorized, authorizationContextHandler];
};

export default useToggleAuth;
