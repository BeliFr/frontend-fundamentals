import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



const Header = () => {
    
    return(
        <AppBar position='fixed' >
          <Toolbar variant="dense" sx={{ justifyContent: 'center' }}>
            <Typography variant="h3" color="inherit" component="div" >
              Aplicación de gastos
            </Typography>
          </Toolbar>
        </AppBar>
    );
}

export default Header;