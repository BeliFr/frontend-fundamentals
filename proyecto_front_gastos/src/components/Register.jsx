import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
 
 
const RegisterForm = () => {
    const [username,setUserName] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstname, lastname, email, username, password);
        console.log(JSON.stringify({
            username: username, 
            firstname: firstname, 
            lastname: lastname, 
            email: email, 
            password:password})
            );

            fetch("http://localhost:8000/users", {
                method: "POST",
                body: JSON.stringify(
                    {
                        username: username, 
                        firstname: firstname, 
                        lastname: lastname, 
                        email: email, 
                        password:password
                    }
                ),
                headers: {
                  "Content-Type": "application/json"
                }
              });
    }

 
    return (
        <>
            <h2>Formulario de registro</h2>
            <form onSubmit={handleSubmit} action={<Link to="/login" />} method='POST'>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Nombre(s)"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstname}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Apellido(s)"
                        onChange={e => setLastName(e.target.value)}
                        value={lastname}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Nombre de usuario"
                    onChange={e => setUserName(e.target.value)}
                    value={username}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <Button variant="outlined" color="secondary" type="submit">Registrar</Button>
            </form>
            <small>Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link></small>
     
        </>
    )
}
 
export default RegisterForm;