import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
// import App from "../../App"
import Login from "../Auth0/Login";

const Auth0 = () => {
  return (
    <Auth0Provider
      domain="padhai.eu.auth0.com"
      clientId="eGstz0z2YVoV4Mw7nmsyHMgGWEcG8DO5"
      redirectUri={window.location.origin}
    >
      <Login />
    </Auth0Provider>
  );
};

export default Auth0;
