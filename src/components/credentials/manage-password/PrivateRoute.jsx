import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { password } = useSelector((state) => state.password);
  const location = useLocation();

  if (!password) {
    return <Navigate to="/create-password" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
