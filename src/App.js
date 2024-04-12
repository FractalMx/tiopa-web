import React from 'react';
import { SnackbarProvider } from "notistack";
import { RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import GeneralProvider  from './context/GeneralContext';
//import RoutesComponent from './components/RoutesComponent/RoutesComponent';
import { router } from "./routes.js";
 
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
      h1: {
        fontSize: '3rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 500,
      },
    },
    palette: {
      primary: {
        main: '#123047',
      },
      secondary: {
        main: '#C7A998',
      },
      third: {
        main: '#6C412F',
      },
      background: {
        default: '#1F2D39',
      },
      text: {
        secondary: '#958143',
      },
      container: {
        maxWidth: 'xl',
      },
    },
    container: {
      maxWidth: '100%',
    },
    
  });

  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <GeneralProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
          
        </ThemeProvider>
        <Footer theme={theme}/>
      </GeneralProvider>
    </SnackbarProvider>
  );
}

export default App;
