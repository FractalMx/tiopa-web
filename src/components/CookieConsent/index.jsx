import React, { useState, useEffect, useContext } from 'react';
import { Snackbar, Button } from '@mui/material';
import {GeneralContext} from '../../context/GeneralContext'; 
const CookieConsent = () => {
  const [open, setOpen] = useState(true);
  const { language } = useContext(GeneralContext);
  useEffect(() => {
    const isConsented = localStorage.getItem('cookieConsent');
    if (isConsented) {
      setOpen(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setOpen(false);
  };

  const messageES = "Este sitio web utiliza cookies para mejorar la experiencia del usuario. Al continuar navegando por el sitio, aceptas nuestro uso de cookies.";
  const messageEN = "This website uses cookies to enhance user experience. By continuing to browse the site, you agree to our use of cookies.";
  return (
    <Snackbar
      open={open}
      message={language === 'es' ? messageES : messageEN}
      action={
        <Button color="secondary" size="small" onClick={handleAccept}>
          Aceptar
        </Button>
      }
    />
  );
};

export default CookieConsent;
