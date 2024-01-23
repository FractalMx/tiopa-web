import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#1a237e',
  color: 'white',
  borderBottom: '1px solid #fff',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    backgroundColor: '#0d1039',
  },
});

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

const StyledTitle = styled(Typography)({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    color: '#ffd600',
  },
});

const StyledButton = styled(Button)({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    color: '#ffd600',
    backgroundColor: '#0d1039',
  },
  '@media (max-width: 600px)': {
    display: 'none',
  },
});

const StyledMenuButton = styled(IconButton)({
  display: 'none',
  '@media (max-width: 600px)': {
    display: 'block',
  },
});

const StyledMenu = styled(Menu)({
  width: '65%',
  '& .MuiPaper-root': {
    backgroundColor: '#1a237e',
  },
});

const StyledMobileButton = styled(Button)({
  width: '100%',
  padding: '10px 20px',
  transition: 'background-color 0.2s, color 0.2s',
  '&:hover, &:focus': {
    backgroundColor: '#0d1039',
    color: '#ffd600',
  },
});

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (anchorEl && !anchorEl.contains(event.target)) {
        handleMenuClose();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [anchorEl]);

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledTitle variant="h6" component={Link} to="/">
          Tiopa Tlanextli Santuario de Luz
        </StyledTitle>
        <div>
          <StyledButton component={Link} to="/">
            Inicio
          </StyledButton>
          <StyledButton component={Link} to="/about">
            Acerca de
          </StyledButton>
          <StyledButton component={Link} to="/contact">
            Contacto
          </StyledButton>
          <StyledMenuButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </StyledMenuButton>
          <StyledMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <StyledMobileButton component={Link} to="/" onClick={handleMenuClose}>
              Inicio
            </StyledMobileButton>
            <StyledMobileButton component={Link} to="/about" onClick={handleMenuClose}>
              Acerca de
            </StyledMobileButton>
            <StyledMobileButton component={Link} to="/contact" onClick={handleMenuClose}>
              Contacto
            </StyledMobileButton>
          </StyledMenu>
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;

