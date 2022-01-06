import { Navigate } from "react-router";
const isvalid = true;
export const ProtectedRoute = ({ children }) => {
  console.log(isvalid);
  return isvalid ? children : <Navigate to="/login" />;
};
