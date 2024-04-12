import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a237e', color: 'white', padding: '20px 0' }}>
      <Container>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Tiopa Tlanextli Santuario de Luz
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;