import React, { useState, useEffect } from 'react';
import { Typography, Container, Paper, Grid, useTheme,List, ListItem, ListItemText, ListItemIcon  } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; 
const AnimatedPaper = animated(Paper);

const Info = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const fadeOut = useSpring({
    opacity: 0,
    config: { duration: 500 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('scroll-trigger').offsetTop;

      const offset = 100;

      if (scrollPosition >= elementPosition - offset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="scroll-trigger">
    <Container style={{ marginTop: '100px' }}>
      <AnimatedPaper
        elevation={3}
        style={{
          padding: '20px',
          textAlign: 'center',
          ...fadeIn,
          ...(isVisible ? {} : fadeOut),
        }}
      >
       
        <Typography variant="h2" gutterBottom>
         ¿Quiénes somos?
        </Typography>
        <Typography paragraph>
          Su nombre emana del dialecto Náhuatl que significa Santuario de luz, que su co-fundador, Carlos Santana, le diera
          con el fin de presentar respeto por la cultura indígena. El 20 de noviembre del año 2005 se colocó la primera
          piedra y es inaugurado el 08 de Septiembre de 2006.
        </Typography>
        <Typography paragraph>
          Es un centro comunitario creado con fines de apoyo a la comunidad más afectada, de bajos recursos y baja
          posibilidad de acceder a los servicios básicos de salud, además de brindar apoyo para la formación educativa de
          Autlán y la región.
        </Typography>

        {/* Mission Section */}
        <Grid container spacing={3} alignItems="center" justifyContent="center"style={{  marginTop: theme.spacing(3) }}>
          <Grid item xs={12} md={4}>
            <img
              src="../img/Banner1.png"
              alt="Mission"
              style={{ width: '100%', borderRadius: theme.shape.borderRadius }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" style={{ color: theme.palette.primary.main, marginBottom: theme.spacing(3) }}>
              MISIÓN
            </Typography>
            <Typography paragraph style={{ fontFamily: 'YourFont1', color: theme.palette.text.primary }}>
              Somos una institución que brinda salud y educación con cortesía, amor, humildad e igualdad, a las mujeres,
              niños, ancianos e indígenas más vulnerables y sus familias en Autlán y la región.
            </Typography>
          </Grid>
        </Grid>

        {/* Vission Section */}
        <Grid container spacing={3} alignItems="center" justifyContent="center" style={{  marginTop: theme.spacing(3) }}>
          <Grid item xs={12} md={4}>
            <img
              src="your-mission-image-url"
              alt="Mission"
              style={{ width: '100%', borderRadius: theme.shape.borderRadius }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" style={{ color: theme.palette.primary.main, marginBottom: theme.spacing(2) }}>
            VISIÓN
            </Typography>
            <Typography paragraph style={{ fontFamily: 'YourFont1', color: theme.palette.text.primary }}>
              Crear el más adelantado sistema de atención en el campo de la salud y la educación, enfocados en rescatar ética
              y profesionalmente la actitud y aptitud de servicio.
            </Typography>
          </Grid>
        </Grid>
       
        {/* Objetive Gen */}
        <Grid container spacing={3} alignItems="center" justifyContent="center" style={{  marginTop: theme.spacing(3) }}>
          <Grid item xs={12} md={4}>
            <img
              src="your-mission-image-url"
              alt="Mission"
              style={{ width: '100%', borderRadius: theme.shape.borderRadius }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" style={{ color: theme.palette.primary.main, marginBottom: theme.spacing(2) }}>
            OBJETIVO GENERAL
            </Typography>
            <Typography paragraph style={{ fontFamily: 'YourFont1', color: theme.palette.text.primary }}>
            Garantizar atención médica de calidad y apoyo educativo a familias de bajos ingresos de Autlán y la región,
          incluyendo poblaciones en situación de vulnerabilidad como mujeres (violentadas, embarazadas, viudas y madres
          solteras), niños (maltratados, en situación de abandono, con problemas de salud y educativos), ancianos
          (abandonados, maltratados y enfermos) e indígenas (sin servicio médico, migrantes o residentes).
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" justifyContent="center" style={{  marginTop: theme.spacing(3) }}>
          
          <Grid item xs={12} md={8}>
            <Typography variant="h5" style={{ color: theme.palette.primary.main, marginBottom: theme.spacing(2) }}>
            SERVICIOS
            </Typography>
            <Typography variant="h6">ÁREA DE SALUD</Typography>
        <List style={{ textAlign: 'center', paddingLeft: 15, fontSize: '1.2em' }}>
          <ListItem > 
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Medicina general" />
          </ListItem>
          <ListItem>
          <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Enfermería" />
          </ListItem>
          <ListItem>
          <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Farmacia" />
          </ListItem>
          <ListItem>
          <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Laboratorio" />
          </ListItem>
          <ListItem>
          <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Dental" />
          </ListItem>
          <ListItem>
          <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Nutrición" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Psicología" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Trabajo social" />
          </ListItem>
        </List>
        <Typography variant="h6">ÁREA CULTURAL</Typography>
        <List style={{ textAlign: 'center', paddingLeft: 15, fontSize: '1.2em' }}>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Biblioteca" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Centro de cómputo" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Talleres artísticos (Danza, Música, Pintura)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Servicios digitales" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Ludoteca" />
          </ListItem>
        </List>
        <Typography variant="h5" gutterBottom>
          ACTIVIDADES ANUALES
        </Typography>
        <List style={{ textAlign: 'center', paddingLeft: 15, fontSize: '1.2em' }}>
          <ListItem >
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Semana médico infantil" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Cursos de verano" />
          </ListItem>
          <ListItem>
          <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Festival Músico Cultural Carlos Santana" />
          </ListItem>
          <ListItem>
          <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Aniversario de Tiopa" />
          </ListItem>
          <ListItem>
          <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Tertulia de día de muertos" />
          </ListItem>
          <ListItem>
          <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Posada Infantil" />
          </ListItem>
          <ListItem>
          <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Evento artístico Uniendo voces" />
          </ListItem>
        </List>
          </Grid>
        </Grid>
       
        
      </AnimatedPaper>
    </Container>
    </div>
  );
};

export default Info;