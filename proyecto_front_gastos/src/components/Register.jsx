import React, { useState } from "react";
import { TextField, Button, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUserName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstname, lastname, email, username, password);
    console.log(
      JSON.stringify({
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      })
    );

    fetch("http://localhost:8000/users", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <>
      <div
        className="bg-white shadow-lg rounded p-8 m-4 max-w-2xl mx-auto h-auto"
        style={{
          height: "120%",
          boxShadow: "0px 4px 8px rgba(17, 193, 243, 0.2)",
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
          Formulario de registro
        </h2>
        <form
          onSubmit={handleSubmit}
          action={<Link to="/login" />}
          method="POST"
          className="space-y-4"
        >
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              type="text"
              variant="outlined"
              label="Nombre(s)"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
              fullWidth
              required
              sx={{ borderColor: "#5E62D1" }}
            />
            <TextField
              type="text"
              variant="outlined"
              label="Apellido(s)"
              onChange={(e) => setLastName(e.target.value)}
              value={lastname}
              fullWidth
              required
              sx={{ borderColor: "#5E62D1" }}
            />
          </Stack>
          <TextField
            type="email"
            variant="outlined"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            fullWidth
            required
            sx={{ mb: 4, borderColor: "#5E62D1" }}
          />
          <TextField
            type="text"
            variant="outlined"
            label="Nombre de usuario"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            fullWidth
            required
            sx={{ mb: 4, borderColor: "#5E62D1" }}
          />
          <TextField
            type="password"
            variant="outlined"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            fullWidth
            sx={{ mb: 4, borderColor: "#5E62D1" }}
          />
          <Button
            variant="outlined"
            style={{
              backgroundColor: "#5E62D1",
              width: "50%",
              color: "white",
              border: "none",
              borderRadius: "20px",
              fontWeight: "bold",
              background: "#5E62D1",
            }}
            type="submit"
            className="rounded-full"
          >
            Registrar
          </Button>
        </form>
      </div>
      <small>
        <small style={{ fontSize: "16px" }}>
          Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link>
        </small>{" "}
      </small>
    </>
  );
};

export default RegisterForm;
