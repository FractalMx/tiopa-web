import React from 'react';
import { GeneralContext } from '../context/GeneralContext';
import Toolbar from '../components/Toolbar';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#fafafa',
    borderRadius: 16,
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(4),
    textAlign: 'center',
    maxWidth: 600,
    margin: 'auto',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: '#3f51b5',
  },
  message: {
    fontSize: 18,
    color: '#333333',
    marginBottom: theme.spacing(4),
  },
  info: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: theme.spacing(1),
  },
  accountDetails: {
    fontSize: 14,
    color: '#666666',
  },
}));

const DonationComponent = () => {
  const classes = useStyles();
  const { language } = React.useContext(GeneralContext);
  const content = {
    title: {
      en: "Support Our Cause!",
      es: "¡Apoya Nuestra Causa!",
    },
    message: {
      en: "Your contribution makes a difference. Help us to help others.",
      es: "Tu contribución marca la diferencia. Ayúdanos a ayudar.",
    },
    accountInfo: {
      en: "To make a donation, please send funds to the following account:",
      es: "Para realizar una donación, por favor envía fondos a la siguiente cuenta:",
    },
    accountDetails: {
      en: "SANTUARIO DE LUZ A.C.\nAccount Number: 0176 2439 08\nBank: BBVA Bancomer",
      es: "SANTUARIO DE LUZ A.C.\nNúmero de Cuenta: 0176 2439 08\nBanco: BBVA Bancomer",
    },
  };

  return (
    <div>
       <Toolbar/>
        <Box height="78vh" display="flex" alignItems="center" justifyContent="center">
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} variant="h2" component="h2">
                {content.title[language]}
              </Typography>
              <Typography className={classes.message} variant="body1" component="p">
                {content.message[language]}
              </Typography>
              <Typography className={classes.info} variant="body1" component="p">
                {content.accountInfo[language]}
              </Typography>
              <Typography className={classes.accountDetails} variant="body2" component="p">
                {content.accountDetails[language]}
              </Typography>
            </CardContent>
          </Card>
        </Box>
    </div>
    
  );
};

export default DonationComponent;



