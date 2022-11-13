import React from "react";
import ReactDOM from "react-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();
  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button onClick={() => logout()}>Log Out</button>
      <button onClick={() => loginWithPopup()}>Log In with Popup</button>
    </div>
  );
};

export default Login;
