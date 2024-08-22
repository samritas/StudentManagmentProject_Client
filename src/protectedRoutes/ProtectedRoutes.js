import { Navigate, Outlet } from "react-router-dom";
import SignIn from "../LandingPage/Pages/Auth/SignIn";

const useAuth = () => {
  const user = { loggedIn: false };
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  return userInfo;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <SignIn />;
};

export default ProtectedRoutes;
