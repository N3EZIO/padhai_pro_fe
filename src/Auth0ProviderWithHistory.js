import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "padhai.eu.auth0.com";
  const clientId = "eGstz0z2YVoV4Mw7nmsyHMgGWEcG8DO5";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
