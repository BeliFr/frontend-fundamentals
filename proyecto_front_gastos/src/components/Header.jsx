import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



const Header = () => {
    
    return(
      <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(to right, #a6a6ff, #5E62D1)', 
        borderRadius: '0 0 50% 0',
        height: '10rem',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%', 
        }}
      >
        <Typography
          color="white"
          component="div"
          sx={{
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: "44px",
          }}
        >
          Aplicación de gastos
        </Typography>
      </Toolbar>
    </AppBar>
    );
}

export default Header;