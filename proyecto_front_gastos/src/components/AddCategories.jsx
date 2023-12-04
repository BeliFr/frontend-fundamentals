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
        <div
        className="bg-white shadow-lg rounded p-8 m-4 max-w-2xl mx-auto h-auto"
        style={{
          height: "120%",
          boxShadow: "0px 4px 8px rgba(17, 193, 243, 0.2)",
        }}
      > 
            <form autoComplete="off" onSubmit={handleSubmit}>
            <h2 style={{ fontSize: "30px", marginBottom: "16px" }}>Registra nueva categoría</h2>
                <TextField 
                    label="Nombre de la categoría"
                    onChange={e => setName(e.target.value)}
                    required
                    variant="outlined"
                    sx={{ mb: 4, borderColor: "#5E62D1" }}
                    type="text"
                    fullWidth
                    value={name}
                 />
                 <Button variant="outlined" style={{
              backgroundColor: "#5E62D1",
              width: "50%",
              color: "white",
              border: "none",
              borderRadius: "20px",
              fontWeight: "bold",
              background: " #5E62D1",
            }} type="submit">Registrar</Button>
        </form>
        </div>
        </>
    );
}

export default Categories;