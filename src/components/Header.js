import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/system';
import { Button, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import BannerImage from '../img/Banner1.png';

const styles = theme => ({
  menuItem: {
    color: theme.palette.text.secondary,
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
      color: theme.palette.secondary.main,
      transform: 'scale(1.1)',
    },
  },
});

const HeaderContainer = styled('div')(({ theme }) => ({
  height: '80vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  transition: 'background-image 1s ease-in-out',
  backgroundPosition: 'center', // Center the background image

  '@media (max-width: 600px)': {
    backgroundPosition: 'center', // Center the background image for screens below 600px width
  },
}));

const HeaderMask = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '80%',
  background: `rgba(0, 0, 0, 0.3)`,
}));

const HeaderContent = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px',
  position: 'relative',
  zIndex: 1,
  '@media (min-width: 600px)': {
    flexDirection: 'row', // Change back to row for larger screens
  },
  '@media (max-width: 600px)': {
    flexDirection: 'row', // Keep the flexDirection as row for responsive mode
    justifyContent: 'space-between',
    textAlign: 'center',
  },
}));

const Logo = styled('img')(({ theme }) => ({
  width: 'auto',
  maxWidth: '100%',
  height: 'auto', // Maintain the aspect ratio
  marginRight: '16px',
  '@media (max-width: 600px)': {
    maxWidth: '130px', // Set a smaller max-width for screens below 600px width
    marginBottom: '16px',
    marginRight: '0', // Move the logo to the top-left in responsive mode
  },
}));

const NavigationButtons = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media (max-width: 600px)': {
    position: 'absolute',
    top: '16px',
    right: '16px',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  '& button': {
    color: theme.palette.primary.secondary,
    transition: `color ${theme.transitions.duration.short}ms ease-in-out`,
    cursor: 'pointer',
    margin: '0 8px',
    '@media (max-width: 600px)': {
      margin: '8px 0',
    },
    '&:hover': {
      color: theme.palette.primary.main,
      transform: 'scale(1.1)',
    },
  },
}));
const buttonPrimaryStyle = ({ theme }) => ({
  color: "white",
  
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
});

const buttonSecondaryStyle = ({ theme }) => ({
  color:"white",
 
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
});

const PrimaryButton = styled(Button)(buttonPrimaryStyle);
const SecondaryButton = styled(Button)(buttonSecondaryStyle);

const JoinUsButton = styled(Button)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 'bold',
  margin: '10px 0',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const ImageOverlay = styled('img')({
  width: '100%',
  height: '80%',
  objectFit: 'cover',
  position: 'absolute',
  transition: 'background-image 1s ease-in-out',
});

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const isResponsive = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const imageUrl = `${process.env.PUBLIC_URL}../img/Banner1.png`;
      setBackgroundImage(`url(${imageUrl})`);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer>
      <ImageOverlay src={BannerImage} alt="Banner" />
      <HeaderMask />
      <HeaderContent>
        <Logo src="https://santuariodeluz.s3.us-east-2.amazonaws.com/LOGO2.png" alt="Logo" />
        {isResponsive ? (
          <>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon style={{ color: 'white' }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem
                onClick={() => handleNavigate('/')}
                className={styles.menuItem}
              >
                Inicio
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigate('/galeria')}
                className={styles.menuItem}
              >
                Nosotros
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigate('/about')}
                className={styles.menuItem}
              >
                Galería
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigate('/donaciones')}
                className={styles.menuItem}
              >
                Donaciones
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigate('/contact')}
                className={styles.menuItem}
              >
                Contacto
              </MenuItem>
            </Menu>
          </>
        ) : (
          <NavigationButtons>
            <PrimaryButton onClick={() => handleNavigate('/')}>
              Inicio
            </PrimaryButton>
            <PrimaryButton onClick={() => handleNavigate('/about')}>
              Nosotros
            </PrimaryButton>
            <PrimaryButton onClick={() => handleNavigate('/galeria')}>
              Galeria
            </PrimaryButton>
            <SecondaryButton onClick={() => handleNavigate('/donaciones')}>
              Donaciones
            </SecondaryButton>
            <SecondaryButton onClick={() => handleNavigate('/contacto')}>
              Contacto
            </SecondaryButton>
          </NavigationButtons>
        )}
      </HeaderContent>
      <div style={{ position: 'absolute', bottom: '200px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
       
        <JoinUsButton variant="contained" color="primary" onClick={() => handleNavigate('/join-us')}>
        ¡Donativos!
        </JoinUsButton>
      </div>
    </HeaderContainer>
  );
};

export default Header;

