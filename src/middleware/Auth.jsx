import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AuthorizeUser = ({ children }) => {
  const token = Cookies.get("token");
  console.log(token);
  if (!token) {
    return <Navigate to={"/"} replace={true}></Navigate>;
  }

  return children;
};
