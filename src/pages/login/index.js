import React from "react";
import { LoginBackground, LoginForm } from "./styles";

import { Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
const Login = () => {
  return (
    <div style={{ position: "relative" }}>
      <LoginBackground />
      <LoginForm>
        <h2>Inicio de sesión</h2>
        <div style={{ margin: "3em auto" }}>
          <Input
            style={{ marginBottom: "1em" }}
            size="large"
            placeholder="Usuario"
            prefix={<UserOutlined />}
          />
          <Input.Password
            style={{ marginBottom: "1em" }}
            size="large"
            placeholder="Contraseña"
          />
          <Button
            style={{ marginTop: "1.2em", width: "100%", height: "2.85em" }}
            type="primary"
            onClick={() => {
              window.sessionStorage.setItem("user", "flozada");
              window.sessionStorage.setItem("token", "token123");
              window.location.reload();
            }}
          >
            Iniciar sesión
          </Button>
        </div>
      </LoginForm>
    </div>
  );
};

export default Login;
