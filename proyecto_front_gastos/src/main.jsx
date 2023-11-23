import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './styles/index.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { AppBar, Toolbar} from '@mui/material';
import { Container } from '@mui/system';
import Login from './components/Login';
import RegisterForm from './components/Register';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
