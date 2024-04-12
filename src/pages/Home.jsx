import React from 'react';
import {GeneralContext} from '../context/GeneralContext';
import {  useMediaQuery, useTheme } from '@mui/material';
import GeneralGoal from '../components/Info/GeneralGoal';
import MissionAndVission from '../components/Info/MissionAndVission';
import WhoWeAre from '../components/Info/WhoWeAre';
import Services from '../components/Info/Services';
import Toolbar from '../components/Toolbar';
import Loader from '../components/Loader';
import WhatsAppButton from '../components/WhatsAppButton';
import CookieConsent from '../components/CookieConsent';

const Home = () => {
  const theme = useTheme();
  
  const { language } = React.useContext(GeneralContext);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
        <Loader/>
        <WhatsAppButton phoneNumber="3171237664" />
        <div>
          <CookieConsent/>
          <Toolbar/>
          <WhoWeAre language={language} isSmallScreen={isSmallScreen} theme={theme} />
          <MissionAndVission language={language} isSmallScreen={isSmallScreen} theme={theme} />
          <GeneralGoal language={language} isSmallScreen={isSmallScreen} theme={theme} />
          <Services language={language} isSmallScreen={isSmallScreen} theme={theme} />
         
        </div>
        
    </div>
  );
};

export default Home;

