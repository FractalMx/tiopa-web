import React from 'react';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import '../css/Contact.css';

const CardInput = ({ name, id, type = 'text', placeholder }) => {
  const theme = useTheme();

  return (
    <TextField
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      required
      fullWidth
      variant="outlined"
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      style={{ marginBottom: theme.spacing(2) }}
    />
  );
};

const CardTextarea = ({ name, id, placeholder }) => {
  const theme = useTheme();

  return (
    <TextareaAutosize
      name={name}
      id={id}
      placeholder={placeholder}
      required
      fullWidth
      minRows={4}
      style={{
        width: '100%',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(2),
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: theme.shape.borderRadius,
      }}
    />
  );
};

const CardBtn = ({ className, type, value }) => {
  const theme = useTheme();

  return (
    <Button
      className={className}
      type={type}
      fullWidth
      variant="contained"
      color="primary"
      style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}
    >
      {value}
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

const CardFront = () => (
  <div className='card-side side-front'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xs-12 col-md-6'>
          <CardMedia component="img" height="140" image='https://source.unsplash.com/random?' alt='Card' />
        </div>

        <div className='col-xs-12 col-md-6 side-front-content'>
          <Typography variant="h2">Tiopa Tlanextli</Typography>
          <Typography variant="h1">Santunario de Luz A.C.</Typography>
          <Typography variant="body1">Andrey is driven by turning ideas into scalable and empowering experiences that solve real-life problems.</Typography>
          <Typography variant="body1">He is currently the founder of Dvorak Media. Previously, Andrey was a product designer at Dropbox.</Typography>
          <Typography variant="body1">Over the years, Michael has been privileged to have worked with Adobe, Evernote, Square, and more.</Typography>
        </div>
      </div>
    </div>
  </div>
);

const CardBack = () => (
  <div className='card-side side-back'>
    <div className='container-fluid'>
      <Typography variant="h1" color="primary">Contacto</Typography>

      <form formAction='' className='card-form'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardInput name='contactFirstName' id='contactFirstName' type='text' placeholder='Nombre' />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardInput name='contactLastName' id='contactLastName' type='text' placeholder='Apellido' />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardInput name='contactEmail' id='contactEmail' type='email' placeholder='Correo Eléctronico' />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardInput name='contactSubject' id='contactSubject' type='text' placeholder='Título' />
          </Grid>
        </Grid>

        <CardTextarea name='contactMessage' id='contactMessage' placeholder='Texto' />

        <CardBtn className='btn btn-primary' type='submit' value='Enviar' />
      </form>

      <CardProfileLinks />
    </div>
  </div>
);

const CardComponent = () => (
  <div className='card-container' style={{ overflow: 'auto' }}>
    <div className='card-body'>
      <CardBack />
      <CardFront />
    </div>
  </div>
);

export default CardComponent;



