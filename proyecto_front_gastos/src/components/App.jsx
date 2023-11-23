import { useEffect, useState } from 'react';
import '../styles/App.css';
import Login from './Login';
import RegisterForm from './Register';
import AddExpense from './AddExpense';
import Expenses from './Expenses';
import AddCategories from './AddCategories';
import NotFound from './NotFound';
import { AppBar, Toolbar} from '@mui/material';
import { Container } from '@mui/system';
import Header from './Header';

import { Route, Routes } from "react-router-dom"


const App = ()=> {
  return (
    <>
        <Header/>
        <Container>
          <Routes>
            <Route path="/" element={<RegisterForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/add_expense" element={<AddExpense />} />
            <Route path="/categories" element={<AddCategories />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="*" element={<NotFound />} />
          </Routes>     
        </Container>
    </>
  )
}

export default App
