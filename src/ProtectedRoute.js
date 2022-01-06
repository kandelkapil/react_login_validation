import { Navigate } from "react-router";
export const ProtectedRoute = ({ children, isvalid }) => {
  console.log(isvalid);
  return isvalid ? children : <Navigate to="/login" />;
};
