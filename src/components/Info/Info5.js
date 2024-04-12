import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid, Button, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; 
import { styled } from '@mui/system';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useLanguage } from '../../context/GeneralContext';
import { useTheme } from '@mui/material/styles';
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

const ButtonContainer = styled('nav')({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '16px',
  margin: 10,
  top:60,
  zIndex: 9999,
  alignContent: 'flex-start',
  '@media (max-width: 768px)': {
    position: 'relative',
    justifyContent: 'center'
    
  },
});

const StyledButton = styled(Button)(({ theme, isSmallScreen }) => ({
  width: '200px',
  fontSize: isSmallScreen ? 12 : 14,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '@media (max-width: 768px)': {
    position: 'relative',
    width: '180px',
    
  },
}));

const ContentContainer = styled('div')({
  width:'100%',
  height:'100%',

});


const Section = styled('section')(({ theme }) => ({
 
  padding: '24px',
  borderRadius: '1px',
  marginBottom: '1px',
}));


const Info = () => {
  const [selectedSection, setSelectedSection] = useState("default");
  const { language } = useLanguage();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setSelectedSection(sectionId);
    }
  };

  return (
   
      <div > 
         <Grid container spacing={2}>
          {/* <Grid item xs={12} md={4}>
            <ButtonContainer>
              <StyledButton
                variant="contained"
                isSmallScreen = {isSmallScreen}
                onClick={() => scrollToSection('objetivo')}
                sx={{ backgroundColor: selectedSection === 'objetivo' ? theme.palette.primary.main : theme.palette.third.main, color: selectedSection === 'objetivo' ? '#fff' : theme.palette.secondary.main, '&:hover': { backgroundColor: selectedSection === 'objetivo' ? '#6C412F' : '#C7A998' } }}
              >
                {language === 'en' ? 'Who we are?' : '¿Quiénes somos?'}
              </StyledButton>
              <StyledButton
                variant="contained"
                isSmallScreen = {isSmallScreen}
                onClick={() => scrollToSection('mision')}
                sx={{ backgroundColor: selectedSection === 'mision' ? theme.palette.primary.main : theme.palette.third.main, color: selectedSection === 'mision' ? '#fff' : theme.palette.secondary.main, '&:hover': { backgroundColor: selectedSection === 'mision' ? '#6C412F' : '#C7A998' } }}
              >
                {language === 'en' ? 'Mission' : 'Misión'}
              </StyledButton>
              <StyledButton
                variant="contained"
                isSmallScreen = {isSmallScreen}
                onClick={() => scrollToSection('vision')}
                sx={{ backgroundColor: selectedSection === 'vision' ? theme.palette.primary.main : theme.palette.third.main, color: selectedSection === 'vision' ? '#fff' :  theme.palette.secondary.main, '&:hover': { backgroundColor: selectedSection === 'vision' ? '#6C412F' : '#C7A998' } }}
              >
                {language === 'en' ? 'Vision' : 'Visión'}
              </StyledButton>
              <StyledButton
                variant="contained"
                isSmallScreen = {isSmallScreen}
                onClick={() => scrollToSection('objetivo-general')}
                sx={{ backgroundColor: selectedSection === 'objetivo-general' ? theme.palette.primary.main : theme.palette.third.main, color: selectedSection === 'objetivo-general' ? '#fff' : theme.palette.secondary.main, '&:hover': { backgroundColor: selectedSection === 'objetivo-general' ? '#6C412F' : '#C7A998' } }}
              >
                {language === 'en' ? 'General Objective' : 'Objetivo General'}
              </StyledButton>
              <StyledButton
                variant="contained"
                isSmallScreen = {isSmallScreen}
                onClick={() => scrollToSection('servicios')}
                sx={{ backgroundColor: selectedSection === 'servicios' ? theme.palette.primary.main : theme.palette.third.main, color: selectedSection === 'servicios' ? '#fff' : theme.palette.secondary.main, '&:hover': { backgroundColor: selectedSection === 'servicios' ? '#6C412F' : '#C7A998' } }}
              >
                {language === 'en' ? 'Services' : 'Servicios'}
              </StyledButton>
            </ButtonContainer>
          </Grid>  */}   
         
          
              
              
                  {/* <Section id="default" style={{  display: selectedSection === 'default' ? 'block' : 'none', backgroundImage: isSmallScreen? `url(${backgroundImagePhone0})`  :`url(${backgroundImage0})`,backgroundSize: 'cover',  }}>
                    <div style={{alignSelf: 'center', height: isSmallScreen ? '46vh' : '85vh',}}> 
                      
                    </div>
                  </Section> */}
                 
                
                  
                  
        
                
                  
                 

                  
        </Grid>  
       
      </div>
   
  );
};

export default Info;




