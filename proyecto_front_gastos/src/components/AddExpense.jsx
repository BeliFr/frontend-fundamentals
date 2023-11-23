import React, {useState, useEffect} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link, json } from "react-router-dom";
import { useNavigate } from "react-router-dom";   

const AddExpense = ()=>{
    const [date,setDate] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    const requestOptionsCat = {
        headers: { 
          method: "GET",
          headers: { "Content-Type": "application/json" },
          Authorization:"Bearer "+localStorage.getItem("jwt")  
        }
      };


   /*  useEffect(() => {
        fetch('http://localhost:8000/categories/', requestOptionsCat)
        .then(resp => resp.json())
        .then(json => setCategories(Object.keys(JSON.stringify(json))))
        .then(json => console.log('cat:'+json))
    }, []); */

    useEffect(()=>{
        fetch('http://localhost:8000/categories/', requestOptionsCat)
        .then(response => response.json())
        .then(cat => setCategories(cat))
    },[]);


/*     useEffect(() => {
        fetch('http://localhost:8000/categories/',requestOptionsCat)
          .then((response) => {
            console.log( response.json())
          })     
      }, []) */
 
    function handleSubmit2(event) {
        event.preventDefault();
        console.log(date, description, amount, paymentMethod, category);
        console.log(JSON.stringify(
            {
                date: date, 
                description: description, 
                amount: amount, 
                payment_method: paymentMethod, 
                categoryId:category
            }));       
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
            date: date, 
            description: description, 
            amount: amount, 
            payment_method: paymentMethod, 
            categoryId:category
          }),
        };
    
        fetch("http://localhost:8000/expenses/", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            setDate("");
            setDescription("");
            setAmount("");
            setPaymentMethod("");
            setCategory("");
            window.alert("Registro exitoso");
            navigate("/expenses");
          });
      };


    return(
        <>
            <h1>Registra tu gasto</h1>
            <form onSubmit={handleSubmit} action={<Link to="/Expenses" />} method='POST'>
                <TextField
                    type="date"
                    variant='outlined'
                    color='secondary'
                    
                    onChange={e => setDate(e.target.value)}
                    value={date}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Descripción"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Cantidad"
                    onChange={e => setAmount(e.target.value)}
                    value={amount}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                
                <FormControl fullWidth>
                <InputLabel id="">Forma de pago</InputLabel>
                    <Select
                        labelId="payment_method_label"
                        id="payment_method"
                        value={paymentMethod}
                        autoWidth
                        label="Metodo de pago"
                        onChange={e => setPaymentMethod(e.target.value)}
                        sx={{mb: 4}}
                    >
                        <MenuItem value="">
                            <em>Selecciona la forma de pago</em>
                        </MenuItem>
                        <MenuItem value="Efectivo" selected >Efectivo</MenuItem>
                        <MenuItem value="Credito">Tarjeta de crédito</MenuItem>
                        <MenuItem value="Debito">Tarjeta de débito</MenuItem>
                        <MenuItem value="Transferencia">Transferencia</MenuItem>
                    </Select>                    
                </FormControl>

                <FormControl fullWidth>
                <InputLabel id="">Categoría</InputLabel>
                    <Select
                        labelId="category_label"
                        id="category"
                        value={category}
                        autoWidth
                        label="Metodo de pago"
                        onChange={e => setCategory(e.target.value)}
                        sx={{mb: 4}}
                    >
                    <MenuItem value="">
                        <em>Selecciona la categoría</em>
                    </MenuItem>
                    {categories.map((cat) => <MenuItem value={cat.id}>{cat.name}</MenuItem>)}
                    <MenuItem value="0"><Link to="/categories">Nueva categoría</Link></MenuItem>
                    </Select>
                    
                             
                </FormControl>
                <Button variant="outlined" color="secondary" type="submit" sx={{mb: 4}}>Registrar</Button>            
            </form>            
        </>
    );
}

export default AddExpense;