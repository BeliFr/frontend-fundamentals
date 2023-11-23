import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Renta', 1, 2),
  createRow('Despensa', 1, 1),
  createRow('Gasolina', 2, 2),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = 1 * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;


const expenses = ()=>{
    return(
        <>
            <h1>Listado de gastos del usuario</h1>
            <small>Quieres registrar un nuevo gasto? <Link to="/add_expense">Registra aquí</Link></small>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                <TableRow>
                    <TableCell align="center" colSpan={3}>
                    Detalles
                    </TableCell>
                    <TableCell align="right">Price</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Descripción</TableCell>
                    <TableCell align="right">Fecha</TableCell>
                    <TableCell align="right">Categoría</TableCell>
                    <TableCell align="right">Gasto</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.desc}>
                    <TableCell>{row.desc}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">{row.unit}</TableCell>
                    <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2}>Subtotal</TableCell>
                    <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                </TableRow>
                
                <TableRow>
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
        </>
    );
}

export default expenses;