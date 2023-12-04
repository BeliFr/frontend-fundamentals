import React, {useState} from "react";
import { TextField, FormControl, Button } from "@mui/material";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

 
const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [logged, setLogged] = useState(false);
    const navigate = useNavigate();
    const handleSubmit2 = (event) => {
        event.preventDefault();
 
        setUserNameError(false);
        setPasswordError(false);
 
        if (username == '') {
            setUserNameError(true);
        }
        if (password == '') {
            setPasswordError(true);
        }
 
        if (username && password) {
            console.log(username, password);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        };
    
        fetch("http://localhost:8000/login/", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            setLogged(true);
            setUserName("");
            setPassword("");
            setLogged(true);
            console.log(data);
            const access = data.jwt;
            localStorage.setItem("jwt", access);
            setLogged(true);
            console.log("Valor de logged: "+logged);
          });
          if (logged) {
            navigate("/expenses");
          }else{
            navigate("/login");
          }
      };
    
     
    return ( 
        <>
         <div
        className="bg-white shadow-lg rounded p-8 m-4 max-w-2xl mx-auto h-auto"
        style={{
          height: "120%",
          boxShadow: "0px 4px 8px rgba(17, 193, 243, 0.2)",
        }}
      >
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Inicia sesión</h2>
                <TextField 
                    label="Username"
                    onChange={e => setUserName(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={username}
                    error={userNameError}
                 />
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="outlined" style={{
              backgroundColor: "#5E62D1",
              width: "50%",
              color: "white",
              border: "none",
              borderRadius: "20px",
              fontWeight: "bold",
              background: " #5E62D1",
            }} type="submit">Iniciar</Button>
             
        </form>
        </div>
        <small>Requieres una cuenta? <Link to="/">Regístrate aquí</Link></small>
        
        </>
     );
}
 
export default Login;