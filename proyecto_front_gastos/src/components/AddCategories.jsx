import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"; 

const Categories = ()=>{
    const [name, setName] = useState("")
    const navigate = useNavigate();

    const handleSubmit2 = (event) => {
        event.preventDefault();
        if (name) {
            console.log(name);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            Authorization:"Bearer "+localStorage.getItem("jwt")  
          },
          body: JSON.stringify({
            name: name 
          }),
        };
    
        fetch("http://localhost:8000/categories/", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            setName("");
            navigate("/expenses");
            window.alert("Registro exitoso");
          });
      };

    return(
        <>
            <form autoComplete="off" onSubmit={handleSubmit}>
            <h1>Registra nueva categoría</h1>
                <TextField 
                    label="Nombre de la categoría"
                    onChange={e => setName(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={name}
                 />
                 <Button variant="outlined" color="secondary" type="submit">Registrar</Button>
        </form>
        </>
    );
}

export default Categories;