import React from 'react';
import { Typography, Container, Grid, IconButton } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const useStyles = theme => ({
  footer: {
    
  },
  socialIcon: {
    
  },
});

const Footer = ({ theme }) => {
  const classes = useStyles(theme);

  return (
    <footer style={{backgroundColor: theme.palette.primary.main,
      color: 'white',
      padding: theme.spacing(4, 0),}}>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" align="center">
              © {new Date().getFullYear()} Tiopa Tlanextli Santuario de Luz
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" align="center">
              Síguenos en redes sociales:
            </Typography>
            <div style={{ textAlign: 'center' }}>
              <IconButton style={{color: 'white',
                marginRight: theme.spacing(1),}} href="https://www.facebook.com/profile.php?id=100057595114008" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton style={{color: 'white',
                marginRight: theme.spacing(1),}} href="https://www.instagram.com/tiopatlanextli/"aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton style={{color: 'white',
                marginRight: theme.spacing(1),}} href="https://www.youtube.com/@tiopatlanextli512instag"aria-label="YouTube">
                <YouTubeIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;