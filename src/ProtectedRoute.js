import { Navigate } from "react-router";

export default function ProtectedRoute({ children, isvalid }) {
  return isvalid ? children : Navigate("/login");
}
