import React, { Fragment } from "react";
import { Parallax } from "rc-scroll-anim";
import { Box, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EventIcon from '@mui/icons-material/Event';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Fade from 'react-reveal/Fade'; // Importa la animación Fade

const StyledListItem = ({ children }) => (
  <Fade bottom cascade> {/* Utiliza la animación Fade con efecto bottom y cascade */}
    <ListItem
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '7px',
        borderRadius: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        marginBottom: '2px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </ListItem>
  </Fade>
);

const StyledListItemIcon = ({ children }) => (
  <ListItemIcon
    sx={{
      minWidth: '40px',
    }}
  >
    {children}
  </ListItemIcon>
);

const HealthArea = ({ language }) => (
  <Grid item xs={12} sm={6} md={4}>
    <div style={{ textAlign: 'center' }}>
      <LocalHospitalIcon fontSize="large" style={{ color: '#4CAF50', marginBottom: '5px' }} />
      <Typography variant="h6" style={{ color: "#4CAF50", marginBottom: '5px' }}>
        {language === "en" ? "Health Area" : "Área de Salud"}
      </Typography>
      <List>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#4CAF50' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={language === "en" ? "General Medicine" : "Medicina General"}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#4CAF50' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={language === "en" ? "Nursing" : "Enfermería"}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#4CAF50' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={language === "en" ? "Pharmacy" : "Farmacia"}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#4CAF50' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={language === "en" ? "Laboratory" : "Laboratorio"}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#4CAF50' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={language === "en" ? "Dental" : "Dental"}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#4CAF50' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={language === "en" ? "Nutrition" : "Nutrición"}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#4CAF50' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={language === "en" ? "Psychology" : "Psicología"}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#4CAF50' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={language === "en" ? "Social Work" : "Trabajo social"}
          />
        </StyledListItem>
        
      </List>
    </div>
  </Grid>
);

const CulturalArea = ({ language }) => (
  <Grid item xs={12} sm={6} md={4}>
    <div style={{ textAlign: 'center' }}>
      <LibraryBooksIcon fontSize="large" style={{ color: '#2196F3', marginBottom: '5px' }} />
      <Typography variant="h6" style={{ color: "#2196F3", marginBottom: '5px' }}>
        {language === "en" ? "Cultural Area" : "Área Cultural"}
      </Typography>
      <List>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#2196F3' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={language === "en" ? "Library" : "Biblioteca"}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#2196F3' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={language === "en" ? "Computer center" : "Centro de cómputo"}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#2196F3' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={language === "en" ? "Artistic workshops (Dance, Music, Painting)"
            : "Talleres artísticos (Danza, Música, Pintura)"}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#2196F3' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={language === "en" ? "Digital Services" : "Servicios digitales"}
          />
        </StyledListItem>
       
        
      </List>
    </div>
  </Grid>
);

const AnnualActivities = ({ language }) => (
  <Grid item xs={12} sm={6} md={4}>
    <div style={{ textAlign: 'center' }}>
      <EventIcon fontSize="large" style={{ color: '#FF9800', marginBottom: '5px' }} />
      <Typography variant="h6" style={{ color: "#FF9800", marginBottom: '5px' }}>
        {language === "en" ? "Annual Activities" : "Actividades Anuales"}
      </Typography>
      <List>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#FF9800' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={
              language === "en" ? "Children's Medical Week" : "Semana Médica Infantil"
            }
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#FF9800' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={
              language === "en" ? "Summer Courses"
              : "Cursos de verano"
            }
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#FF9800' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={
              language === "en" ? "Carlos Santana Music and Cultural Festival"
              : "Festival Músico Cultural Carlos Santana"
            }
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#FF9800' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={
              language === "en" ?  "Tiopa Anniversary"
              : "Aniversario de Tiopa"
            }
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#FF9800' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={
              language === "en" ?  "Day of the Dead Tertulia"
              : "Tertulia de día de muertos"
            }
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#FF9800' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={
              language === "en" ?  "Children's Posada"
              : "Posada Infantil"
            }
          />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FiberManualRecordIcon style={{ color: '#FF9800' }} />
          </StyledListItemIcon>
          <ListItemText
            primary={
              language === "en" ?  "Uniting Voices Artistic Event"
              : "Evento artístico Uniendo voces"
            }
          />
        </StyledListItem>
       
      </List>
    </div>
  </Grid>
);

const Services = ({ isSmallScreen, language, theme }) => (
  <Fragment >
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0, backgroundColor:'white'}}
          className="code-box-shape"
        >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: isSmallScreen ? "60vh" : "70vh",
            backgroundColor:"#958143",
            position: 'relative',
            padding: '20px',
          }}
        >
          <Box
            sx={{
              width: "95%",
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '16px',
              padding: '20px',
            }}
          >
            <Typography variant="h2" gutterBottom style={{ color: "#37474F", textAlign: 'center', marginBottom: '20px' }}>
              {language === "en" ? "Services" : "Servicios"}
            </Typography>
            <Grid
              container
              spacing={3}
              sx={{
                width: "100%",
                margin: 0,
                padding: 0,
                justifyContent: 'center',
              }}
            >
              <HealthArea language={language} />
              <CulturalArea language={language} />
              <AnnualActivities language={language} />
            </Grid>
          </Box>
        </Box>
      </Parallax>
    </Fragment>    
);

export default Services;