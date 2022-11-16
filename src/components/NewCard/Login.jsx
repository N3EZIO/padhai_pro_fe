import React from "react";
import "./Login.css";
import { GoogleOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div id="login-page">
      <div id="login-card">
        <h1>
          <b>Welcome to Padh-AI</b>
        </h1>
        <br></br>
        <div className="login-button google" onClick={loginWithRedirect}>
          <GoogleOutlined
            style={{
              fontSize: "150%",
            }}
          />{" "}
          {"   "}
          <span style={{ padding: "10px" }}>Sign In / Register</span>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Login;
