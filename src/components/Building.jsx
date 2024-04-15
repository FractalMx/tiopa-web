// Importar las bibliotecas necesarias de React y Material-UI
import React from 'react';
import { Box, Typography } from '@mui/material';

// Definir el componente
const Building = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f0f0f0" // Fondo gris claro
    >
      <Typography variant="h4" color="textPrimary" gutterBottom>
        Página en Construcción
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Estamos trabajando para mejorar la experiencia. Vuelve pronto.
      </Typography>
    </Box>
  );
};

// Exportar el componente para su uso en otros archivos
export default Building;
