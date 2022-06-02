import React from "react";
import { useUserContext } from "../context/userContext";
import Home from "./Home";
import LoginForm from "./LoginForm";

const Auth = () => {
  const { user } = useUserContext();
  return <>{user.isGuestUser ? <LoginForm /> : <Home></Home>}</>;
};

export default Auth;
