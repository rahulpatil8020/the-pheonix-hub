import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { UserContext } from "../models/user-context";
import { useContext } from "react";
const PrivateRoutes = ({ children, ...rest }) => {
  const [user, setUser] = useContext(UserContext);
  const authToken = localStorage.getItem("token");
  
  return authToken ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
