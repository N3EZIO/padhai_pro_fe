import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/NewCard/Card";
// check if user is authenticated else redirect to login
import { Auth0Provider } from "@auth0/auth0-react";
import {useAuth0} from "@auth0/auth0-react";
const Home = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <Auth0Provider
        domain="padhai.eu.auth0.com"
        clientId="eGstz0z2YVoV4Mw7nmsyHMgGWEcG8DO5"
        redirectUri={window.location.origin}
        audience="a unique identifier"
        scope="openid profile email"
      >
        <Navbar />
        <Card />
      </Auth0Provider>
    </>
  );
};

export default Home;
