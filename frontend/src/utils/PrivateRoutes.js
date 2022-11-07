import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const PrivateRoutes = ({ children, ...rest }) => {
  let auth = { token: false };
  return auth.token ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
