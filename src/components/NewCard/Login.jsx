import React from "react";
import "./Login.css";
import { GoogleOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h1>
          <b>Welcome to Padh-AI</b>
        </h1>
        <br></br>
        <div className="login-button google">
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
