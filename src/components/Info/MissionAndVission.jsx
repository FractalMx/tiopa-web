import React, { Fragment } from "react";
import { Box, Typography, Grid} from "@mui/material";

import { Parallax } from "rc-scroll-anim";
import backgroundImage2 from '../../img/tiopa-background-mission.png';
import backgroundImagePhone2 from '../../img/tiopa-background-mission-phone.png';

const Mission = ({isSmallScreen, language, theme}) => {

  return (
    <Fragment >
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0, backgroundColor:'white'}}
          className="code-box-shape"
        >
        <Box
        sx={{
            marginLeft:0.5,
            marginRight:0.5,
            borderRadius:1,
            minHeight: isSmallScreen ? "60vh":"100vh",
            position: "relative", 
            backgroundSize: 'cover',
            backgroundImage: isSmallScreen ? `url(${backgroundImagePhone2})` :`url(${backgroundImage2})`,
        }}
        id="mission"
        >
           <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
                
              <Grid container
                  spacing={2}
                  alignItems="center"
                  justifyContent="flex-start"
                  direction={"row"}>
                    <Grid container item   spacing={2}  >
                               
                      <Grid  item  xs={12} md={6} >
                          
                          <Typography variant="h4" align="center" sx={{ marginBottom: isSmallScreen ? 2 : 0, color:'white' }}>
                              {language === 'en' ? 'Mission' : 'Misión'}
                          </Typography>
                      
                          <Typography variant="body1" align={isSmallScreen ? 'center' : 'left'}
                              color="white"
                              sx={{
                              padding: isSmallScreen ? 1 : 3,
                              fontSize: isSmallScreen ? 14 : 22,
                              textAlign: 'justify',
                              }}
                              paragraph
                          >
                              {language === 'en' ? `We are an institution that provides health and education with courtesy, love, humility and equality, to the most vulnerable women,
                              children, elderly and indigenous people and their families in Autlán and the region.` : `Somos una institución que brinda salud y educación con cortesía, amor, humildad e igualdad, a las mujeres,
                              niños, ancianos e indígenas más vulnerables y sus familias en Autlán y la región.`}
                          </Typography>
                              
                          
                          
                      </Grid>  
                      
                    
                      <Grid  item  xs={12} md={6} >
                          
                          <Typography variant="h4" align="center" sx={{ marginBottom: isSmallScreen ? 2 : 0, color:'white' }}>
                              {language === 'en' ? 'Vission' : 'Visión'}
                          </Typography>
                      
                          <Typography variant="body1" align={isSmallScreen ? 'center' : 'left'}
                              color="white"
                              sx={{
                              padding: isSmallScreen ? 1 : 3,
                              fontSize: isSmallScreen ? 14 : 22,
                              textAlign: 'justify',
                              }}
                              paragraph
                          >
                              {language === 'en' ? `To create the most advanced system of care in the field of health and education, focused on rescuing ethics
                              and professionally the attitude and aptitude of service.` : `Crear el más adelantado sistema de atención en el campo de la salud y la educación, enfocados en rescatar ética
                              y profesionalmente la actitud y aptitud de servicio.`}
                          </Typography>
                      </Grid>
                  </Grid>
                </Grid>
                </Box>
            </Box>
        </Parallax>
    </Fragment>
   
  );
};

export default Mission;