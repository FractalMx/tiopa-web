import React, { Fragment } from "react";
import { Box, Typography, Grid } from "@mui/material";

import { Parallax } from "rc-scroll-anim";
import backgroundImage1 from "../../img/tiopa-background0.png";
import backgroundImagePhone1 from "../../img/tiopa-background0-phone.png";

const WhoWeAre = ({ isSmallScreen, language, theme }) => {
  return (
    <Fragment>
      <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
        style={{
          transform: "translateX(-100px)",
          opacity: 0,
          backgroundColor: "white",
        }}
        className="code-box-shape"
      >
        <Box
          sx={{
            marginLeft: 0.5,
            marginRight: 0.5,
            borderRadius: 1,
            minHeight: isSmallScreen ? "60vh" : "100vh",
            position: "relative",
            backgroundSize: "cover",
            backgroundImage: isSmallScreen
              ? `url(${backgroundImagePhone1})`
              : `url(${backgroundImage1})`,
          }}
          id="whoweare"
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
            <Grid
              container
              spacing={isSmallScreen ? 1 : 2}
              alignItems="center"
              justifyContent="flex-start"
              direction={"row"}
            >
              <Grid container item spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h4"
                    align="center"
                    sx={{ marginBottom: isSmallScreen ? 2 : 0, color: "white" }}
                  >
                    {language === "en" ? "About Us" : "¿Quiénes somos?"}
                  </Typography>

                  <Typography
                    variant="body1"
                    align={isSmallScreen ? "center" : "left"}
                    color="white"
                    sx={{
                      padding: isSmallScreen ? 1 : 3,
                      fontSize: isSmallScreen ? 14 : 22,
                      textAlign: "justify",
                    }}
                    paragraph
                  >
                    {language === "en"
                      ? `Its name emanates from the Nahuatl dialect which means Sanctuary of Light, which its co-founder, Carlos Santana, gave it
                                        in order to show respect for indigenous culture. On November 20th, 2005, the first stone was laid
                                        and it was inaugurated on September 8th, 2006.`
                      : `Su nombre emana del dialecto Náhuatl que significa Santuario de luz, que su co-fundador, Carlos Santana, le diera
                                            con el fin de presentar respeto por la cultura indígena. El 20 de noviembre del año 2005 se colocó la primera
                                            piedra y es inaugurado el 08 de Septiembre de 2006.`}
                  </Typography>
                  <Typography
                    variant="body1"
                    align={isSmallScreen ? "center" : "left"}
                    color="white"
                    sx={{
                      padding: isSmallScreen ? 1 : 3,
                      fontSize: isSmallScreen ? 14 : 22,
                      textAlign: "justify",
                    }}
                    paragraph
                  >
                    {language === "en"
                      ? `It is a community center created to support the most affected community, with low resources and low
                                        possibility of accessing basic health services, in addition to providing support for educational training of
                                        Autlán and the region.`
                      : `Es un centro comunitario creado con fines de apoyo a la comunidad más afectada, de bajos recursos y baja
                                            posibilidad de acceder a los servicios básicos de salud, además de brindar apoyo para la formación educativa de
                                            Autlán y la región.`}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Parallax>
    </Fragment>
  );
};

export default WhoWeAre;
