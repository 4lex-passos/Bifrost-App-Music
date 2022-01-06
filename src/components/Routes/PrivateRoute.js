import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = Cookies.get("token");

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
