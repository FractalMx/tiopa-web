import React, { Fragment } from "react";
import { Box, Typography, Grid} from "@mui/material";

import { Parallax } from "rc-scroll-anim";
import backgroundImage4 from '../../img/tiopa-background-objetivo.png';
import backgroundImagePhone4 from '../../img/tiopa-background-objetivo.png';

const GeneralGoal = ({isSmallScreen, language, theme}) => {

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
            backgroundImage: isSmallScreen ? `url(${backgroundImagePhone4})` :`url(${backgroundImage4})`,
        }}
        id="generalGoal"
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
                      spacing={isSmallScreen ? 1 : 2}
                      alignItems="center"
                      width={'90%'}
                      direction={"column"}>
                        
                    <Grid item xs={12} md={6} >
                        <Typography variant="h4" align="center" sx={{ marginBottom: isSmallScreen ? 2 : 0, color:'white' }}>
                            {language === 'en' ? 'General Objective' : 'Objetivo general'}
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
                          {language === 'en' ? `To guarantee quality medical care and educational support to low-income families in Autlán and the region,
                              including populations in situations of vulnerability such as women (abused, pregnant, widowed and mothers
                              single), children (mistreated, abandoned, with health and educational problems), elderly
                              (abandoned, mistreated and sick) and indigenous (without medical service, migrants or residents).` : `Garantizar atención médica de calidad y apoyo educativo a familias de bajos ingresos de Autlán y la región,
                              incluyendo poblaciones en situación de vulnerabilidad como mujeres (violentadas, embarazadas, viudas y madres
                              solteras), niños (maltratados, en situación de abandono, con problemas de salud y educativos), ancianos
                              (abandonados, maltratados y enfermos) e indígenas (sin servicio médico, migrantes o residentes).`}
                      </Typography>
                    </Grid>     
                  </Grid>
                </Box>
            </Box>
        </Parallax>
    </Fragment>
   
  );
};

export default GeneralGoal;