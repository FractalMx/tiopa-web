import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Galery from './pages/Galery';
import Donations from './pages/Donations';
import Contact from './pages/Contact';
import Building from './components/Building';
import Header from './components/Header';
import Footer from './components/Footer';
import { CssBaseline, Container, useTheme } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const theme = useTheme();
  
  theme.typography = {
    fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','), // Puedes ajustar las fuentes según tus preferencias
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      // Ajusta otros estilos según sea necesario
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      // Ajusta otros estilos según sea necesario
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      // Ajusta otros estilos según sea necesario
    },
    // Puedes personalizar otros estilos según sea necesario
  };
  // Agregar la paleta de colores al theme
  theme.palette = {
    ...theme.palette,
    primary: {
      main: '#984427',
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
    text:{
      secondary: '#958143',
    },
  };

  // Puedes personalizar otras propiedades del theme si es necesario

  theme.container = {
    ...theme.container,
    maxWidth: '100%', // Establece el ancho máximo al 100%
  };

  return (
    <ThemeProvider theme={createTheme(theme)}>
     
      <Router>
        {/* <Header /> */}
        <Building />
        <CssBaseline />
        <Container style={{ maxWidth: '100%', padding: 0 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<Galery />} />
            <Route path="/donaciones" element={<Donations />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
