import React, { useState } from 'react';
import {GeneralContext} from '../context/GeneralContext';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axiosClient from "../Config/axios";
import useMediaQuery from '@mui/material/useMediaQuery';
import backgroundImage1 from '../img/tiopa-contact.png';
import backgroundImagePhone1 from '../img/tiopa-contact-phone.png';
import Toolbar from '../components/Toolbar';
import Loader from '../components/Loader';
import '../css/Contact.css';


const getPlaceHolder = (placeHolderInput) =>{
  let placeHolder = placeHolderInput;

  switch (placeHolderInput) {
    case 'Nombre':
      placeHolder = 'Name';
      break;
    case 'Apellido':
      placeHolder = 'Second name';
      break;
    case 'Correo Electrónico':
      placeHolder = 'E-mail';
      break;
    case 'Título':
      placeHolder = 'Title';
      break;
    default:
      break;
  }
  return placeHolder;
}

const CardInput = ({ name, id, type = 'text', placeholder, language, value, onChange }) => {
  const placeholderText = language === 'en' ? getPlaceHolder(placeholder) : placeholder;

  return (
    <TextField
      name={name}
      id={id}
      type={type}
      placeholder={placeholderText}
      
      onChange={onChange} 
      required
      fullWidth
      variant="outlined"
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

const CardTextarea = ({ name, id, placeholder, language, value, onChange  }) => {
  return (
    <textarea
      name={name}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      required
      style={{
        width: '100%',
        padding: '8px',
        marginBottom: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        resize: 'vertical',
        minHeight: '80px',
        maxHeight: '160px',
      }}
    />
  );
};

const CardBtn = ({ className, type, value, language }) => {
  const buttonText = language === 'en' ? 'Send' : 'Enviar';

  return (
    <Button
      className={className}
     
      type={type}
      fullWidth
      variant="contained"
      color="primary"
      style={{ marginTop: '16px', marginBottom: '16px' }}
    >
      {buttonText}
    </Button>
  );
};

const CardProfileLinks = () => {
  const profileLinks = ['twitter', 'linkedin', 'dribbble', 'facebook'];

  return (
    <div className='card-social-links'>
      <ul className='social-links'>
        {profileLinks.map((link, index) => (
          <li key={index}><a href='#'><i className={`fa fa-${link}`}></i></a></li>
        ))}
      </ul>
    </div>
  );
};

const CardFront = ({ language, isSmallScreen }) => (
  <div className='card-side side-front' style={{ backgroundImage: isSmallScreen ? `url(${backgroundImagePhone1})` : `url(${backgroundImage1})` }}>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xs-12 col-md-6'>
          <div className="background-overlay"></div>
        </div>
          <div className='col-xs-12 col-md-6 side-front-content'>
            <div className="content-wrapper">
              <Typography variant="body1" align="center">
                {language === 'en'
                  ? "We'd love to hear from you! We value your feedback and are here to answer any questions you may have about our services, programs, or community events. Feel free to contact us using the contact information below or via the contact form on this page."
                  : "¡Nos encantaría escucharte!, valoramos tu opinión y estamos aquí para responder cualquier pregunta que puedas tener sobre nuestros servicios, programas o eventos comunitarios. No dudes en contactarnos utilizando la información de contacto a continuación o mediante el formulario de contacto en esta página."}
              </Typography>
            </div>
          </div> 
      </div>
    </div>
  </div>
);

const CardBack = ({ language, snackMessage, changeLoading }) => {
  const [formData, setFormData] = useState({
    contactFirstName: '',
    contactLastName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      changeLoading(true);
      
      await axiosClient.post('/tiopa/sendEmail', formData);
      
      snackMessage({
        message: language === 'en' ? "'Message sent successfully!'"
        :  "Mensaje enviado con éxito.",
        variant: "success",
      });
     setFormData({contactFirstName: '',
     contactLastName: '',
     contactEmail: '',
     contactSubject: '',
     contactMessage: ''});

     window.location.reload();
    } catch (error) {
      console.error('Error sending email:', error);
      snackMessage({
        message: language === 'en' ? "'An error occurred while sending the message. Please try again later.'"
        :  "Ha ocurrido un error mientras se enviaba su mensaje. Inténtalo otra vez.",
        variant: "error",
      });
      
    }
    changeLoading(false);
  };

  return (
    <div className='card-side side-back card-contact'>
      <div className='container-fluid'>
        <Typography variant="h1" color="primary">
          {language === 'en' ? 'Contact' : 'Contacto'}
        </Typography>

        <form onSubmit={handleFormSubmit} className='card-form' >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CardInput name='contactFirstName' id='contactFirstName' type='text' placeholder='Nombre' language={language} value={formData.contactFirstName} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardInput name='contactLastName' id='contactLastName' type='text' placeholder='Apellido' language={language} value={formData.contactLastName} onChange={handleChange} />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CardInput name='contactEmail' id='contactEmail' type='email' placeholder='Correo Electrónico' language={language} value={formData.contactEmail} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardInput name='contactSubject' id='contactSubject' type='text' placeholder='Título' language={language} value={formData.contactSubject} onChange={handleChange} />
            </Grid>
          </Grid>

          <CardTextarea name='contactMessage' id='contactMessage' placeholder='Texto' language={language} value={formData.contactMessage} onChange={handleChange} />

          <CardBtn className='btn btn-primary' type='submit' value='Enviar'   language={language} />
        </form>

        <CardProfileLinks />
      </div>
    </div>
  );
};

const CardComponent = () => {
  const { language, snackMessage, changeLoading } = React.useContext(GeneralContext);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');

    // Función para verificar si el dispositivo es táctil
    const detectTouch = () => {
        return 'ontouchstart' in window || navigator.maxTouchPoints;
    };

    // Función para agregar la clase 'hover' o 'touch' según el tipo de dispositivo
    const addInteractionClass = () => {
        if (detectTouch()) {
            cardContainer.classList.add('touch');
        } else {
            cardContainer.classList.add('hover');
        }
    };

    // Agregar la clase correspondiente al cargar la página
    addInteractionClass();

    // Agregar evento hover para dispositivos no táctiles
    cardContainer.addEventListener('mouseenter', () => {
        if (!detectTouch()) {
            cardContainer.classList.add('hover');
        }
    });

    // Agregar evento touchstart para dispositivos táctiles
    cardContainer.addEventListener('touchstart', () => {
        cardContainer.classList.add('touch');
    });
  });
  return (
    <div>
       <Loader/>
      <Toolbar/>
      <div className='screen' >
     
        <div className='card-container' >
          <div className='card-body'>
            <CardBack language={language} snackMessage={snackMessage} changeLoading={changeLoading} />
            <CardFront language={language} isSmallScreen={isSmallScreen} />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default CardComponent;





