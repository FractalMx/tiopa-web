import React, { useState } from 'react';
import { useLanguage } from '../../context/GeneralContext';
import { styled } from '@mui/system';
import { Typography, Grid, useMediaQuery, useTheme, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; 
import backgroundImage0 from '../../img/tiopa-background0.png';
import backgroundImagePhone0 from '../../img/tiopa-background0-phone.png';
import backgroundImage1 from '../../img/tiopa-background2.png';
import backgroundImagePhone1 from '../../img/tiopa-background2-phone.png';
import backgroundImage2 from '../../img/tiopa-background-mission.png';
import backgroundImagePhone2 from '../../img/tiopa-background-mission-phone.png';
import backgroundImage3 from '../../img/tiopa-background-vision.png';
import backgroundImagePhone3 from '../../img/tiopa-background-vision-phone.png';
import backgroundImage4 from '../../img/tiopa-background-objetivo.png';
import backgroundImagePhone4 from '../../img/tiopa-background-objetivo-phone.png';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  }));
  
  const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
    minWidth: '40px',
  }));
  

const Info = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={2}>
      

      <Grid item xs={12}>
        
        <div style={{backgroundImage: isSmallScreen? `url(${backgroundImagePhone1})` :`url(${backgroundImage1})`,
                    backgroundSize: 'cover', height: isSmallScreen ? '65vh' :'92vh',display: 'flex',
                   
                    alignItems: 'flex-end'}}>
            <div style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                        height: isSmallScreen ? '30vh' :'55vh', 
                        width: isSmallScreen ? '58%' :'47%', 
                        paddingTop: isSmallScreen ? '30px' : '0 15px', // Add padding only to the sides
                        textAlign: 'center', 
                        borderRadius:3}}> 
                <Typography variant="h6"  align="center">¿Quiénes somos?</Typography>
                <Typography style={{textAlign:'center',color:theme.palette.primary.main, 
                                    padding: isSmallScreen ? 1 :15, 
                                    paddingBottom: isSmallScreen ? 0 :15, 
                                    fontSize: isSmallScreen ? 13 : 22}}
                            paragraph>
                    {language === 'en' ? `Its name emanates from the Nahuatl dialect which means Sanctuary of Light, which its co-founder, Carlos Santana, gave it
                    in order to show respect for indigenous culture. On November 20th, 2005, the first stone was laid
                    and it was inaugurated on September 8th, 2006.` : `Su nombre emana del dialecto Náhuatl que significa Santuario de luz, que su co-fundador, Carlos Santana, le diera
                        con el fin de presentar respeto por la cultura indígena. El 20 de noviembre del año 2005 se colocó la primera
                        piedra y es inaugurado el 08 de Septiembre de 2006.`}
                </Typography>
                <Typography style={{textAlign:'center',color:theme.palette.primary.main, 
                                    padding:isSmallScreen ? 3 :15,
                                    paddingTop:  isSmallScreen ? 0 :0, 
                                    paddingBottom: isSmallScreen ? 0 :15, 
                                    fontSize: isSmallScreen ? 13 : 22}}
                            paragraph>
                    {language === 'en' ? `It is a community center created to support the most affected community, with low resources and low
                    possibility of accessing basic health services, in addition to providing support for educational training of
                    Autlán and the region.` : `Es un centro comunitario creado con fines de apoyo a la comunidad más afectada, de bajos recursos y baja
                        posibilidad de acceder a los servicios básicos de salud, además de brindar apoyo para la formación educativa de
                        Autlán y la región.`}
                </Typography>
            </div>
        </div>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom align="center">Misión</Typography>
        <div style={{backgroundImage: isSmallScreen? `url(${backgroundImagePhone2})` :`url(${backgroundImage2})`,
                    backgroundSize: 'cover', height: isSmallScreen ? '65vh' :'100vh', }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', height: isSmallScreen ? '10vh' :'15vh', width:'100%', borderRadius:3}}> 
            <Typography paragraph style={{textAlign:'center', color:theme.palette.primary.main, padding: isSmallScreen ? 6 :15, fontSize: isSmallScreen ? 14 : 24}}>{language === 'en' ? `We are an institution that provides health and education with courtesy, love, humility and equality, to the most vulnerable women,
                children, elderly and indigenous people and their families in Autlán and the region.` : `Somos una institución que brinda salud y educación con cortesía, amor, humildad e igualdad, a las mujeres,
                niños, ancianos e indígenas más vulnerables y sus familias en Autlán y la región.`}</Typography>
            </div>     
        </div> 
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom align="center">Visión</Typography>
        <div style={{ backgroundImage: isSmallScreen? `url(${backgroundImagePhone3})`  :`url(${backgroundImage3})`,backgroundSize: 'cover', height: isSmallScreen ? '65vh' :'100vh', }}>
            <div style={{alignSelf: 'center', backgroundColor: 'rgba(255, 255, 255, 0.7)', marginLeft: isSmallScreen ? '6vh' : '90vh', height: isSmallScreen ? '11vh' :'22vh', width: isSmallScreen ? '85%' :'45%',  borderRadius:3}}> 
                <Typography paragraph style={{textAlign:'center', color:theme.palette.primary.main, padding: isSmallScreen ? 6 :15, fontSize: isSmallScreen ? 14 : 24}}>{language === 'en' ? `To create the most advanced system of care in the field of health and education, focused on rescuing ethics
                and professionally the attitude and aptitude of service.` : `Crear el más adelantado sistema de atención en el campo de la salud y la educación, enfocados en rescatar ética
                y profesionalmente la actitud y aptitud de servicio.`}</Typography>
            </div>  
        </div>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom align="center">Objetivo</Typography>
        <div  style={{ display: 'block' , backgroundImage: isSmallScreen? `url(${backgroundImagePhone4})`  :`url(${backgroundImage4})`,backgroundSize: 'cover', height:isSmallScreen ? '65vh' :'100vh',  }}>
            <div style={{alignSelf: 'center', backgroundColor: 'rgba(255, 255, 255, 0.7)', height: isSmallScreen ? '20vh' :'22vh', width:'100%',  borderRadius:3}}>
                <Typography paragraph style={{textAlign:'center', color:theme.palette.primary.main, padding: isSmallScreen ? 6 :15, fontSize: isSmallScreen ? 14 : 24}}>{language === 'en' ? `To guarantee quality medical care and educational support to low-income families in Autlán and the region,
                including populations in situations of vulnerability such as women (abused, pregnant, widowed and mothers
                single), children (mistreated, abandoned, with health and educational problems), elderly
                (abandoned, mistreated and sick) and indigenous (without medical service, migrants or residents).` : `Garantizar atención médica de calidad y apoyo educativo a familias de bajos ingresos de Autlán y la región,
                incluyendo poblaciones en situación de vulnerabilidad como mujeres (violentadas, embarazadas, viudas y madres
                solteras), niños (maltratados, en situación de abandono, con problemas de salud y educativos), ancianos
                (abandonados, maltratados y enfermos) e indígenas (sin servicio médico, migrantes o residentes).`}</Typography>
            </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={{display:  'block' }}>
            <Typography variant="h4" gutterBottom>{language === 'en' ? 'Services' : 'Servicios'}</Typography>
            <Grid container spacing={3} style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.8)' }}>
                <Grid item xs={12} sm={6} md={4}>
                <div>
                    <Typography variant="h6">{language === 'en' ? 'HEALTH AREA' : 'ÁREA DE SALUD'}</Typography>
                    <List style={{ textAlign: 'center', paddingLeft: 15, fontSize: '1.2em' }}>
                    <StyledListItem > 
                        <StyledListItemIcon>
                        <img src={'image1'} alt="General Medicine" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                        </StyledListItemIcon>
                        <ListItemText primary={language === 'en' ? 'General Medicine' : 'Medicina general'} />
                    </StyledListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Nursing' : 'Enfermería'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Pharmacy' : 'Farmacia'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Laboratory' : 'Laboratorio'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Dental' : 'Dental'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Nutrition' : 'Nutrición'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Psychology' : 'Psicología'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Social Work' : 'Trabajo social'} />
                    </ListItem>
                    </List>
                </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <div>
                    <Typography variant="h6">{language === 'en' ? 'CULTURAL AREA' : 'ÁREA CULTURAL'}</Typography>
                    <List style={{ textAlign: 'center', paddingLeft: 15, fontSize: '1.2em' }}>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Library' : 'Biblioteca'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Computer center' : 'Centro de cómputo'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Artistic workshops (Dance, Music, Painting)' : 'Talleres artísticos (Danza, Música, Pintura)'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Digital Services' : 'Servicios digitales'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Ludoteca' : 'Ludoteca'} />
                    </ListItem>
                    </List>
                </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <div>
                    <Typography variant="h6" gutterBottom>{language === 'en' ? 'ANNUAL ACTIVITIES' : 'ACTIVIDADES ANUALES'}</Typography>
                    <List style={{ textAlign: 'center', paddingLeft: 15, fontSize: '1.2em' }}>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Children\'s Medical Week' : 'Semana médico infantil'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Summer Courses' : 'Cursos de verano'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Carlos Santana Music and Cultural Festival' : 'Festival Músico Cultural Carlos Santana'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Tiopa Anniversary' : 'Aniversario de Tiopa'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Day of the Dead Tertulia' : 'Tertulia de día de muertos'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Children\'s Posada' : 'Posada Infantil'} />
                    </ListItem>
                    <ListItem > 
                        <ListItemIcon>
                        <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={language === 'en' ? 'Uniting Voices Artistic Event' : 'Evento artístico Uniendo voces'} />
                    </ListItem>
                    </List>
                </div>
                </Grid>
            </Grid>
            </div>
        </Grid>   
    </Grid>
  );
}

export default Info;
