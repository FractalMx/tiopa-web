import * as React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Switch, useMediaQuery, Stack, Box, IconButton } from "@mui/material";
import { useTheme, styled} from "@mui/material/styles";
import {GeneralContext} from '../../context/GeneralContext';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";




function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));
  const ToolbarHere = (props) => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { language, changeLanguage } = React.useContext(GeneralContext);;
  
  const [openDraw, setOpenDraw] = React.useState(false);

  const pages =  [
    
    {
      title: language === 'en' ? 'Home' : 'Inicio',
      route: "/",
      component: Link,
    },
    {
      title: language === 'en' ? 'Gallery' : 'Galería',
      route: "/gallery",
      component: Link,
    },
    {
      title: language === 'en' ? 'Donations' : 'Donaciones',
      route: "/donations",
      component: Link,
    },
    {
      title: language === 'en' ? 'Contact' : 'Contacto',
      route: "/contact",
      component: Link,
    },
    // Otros objetos de páginas aquí
] 
;
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDraw(open);
  };
  const handleLanguageChange = () => {
    changeLanguage(language === 'en' ? 'es' : 'en');
  };

  
  
  return (
    <React.Fragment>
        <ElevationScroll {...props}>
            <AppBar position="static">
            <Toolbar>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer(true)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <ResponsiveMenu toggleDrawer={toggleDrawer} open={openDraw} pages={pages} />
              </Box>
                {isSmallScreen ? (
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" spacing={1}>
                    
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Santuario de Luz A.C.
                        </Typography>
                        <Typography>ES</Typography>
                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }}checked={language === 'en'}
                            onChange={handleLanguageChange} />
                        <Typography>EN</Typography>
                    </Stack>
                </Stack>
                ) : (
                <>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Santuario de Luz A.C.
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                    {language === 'en' ? 'Home' : 'Inicio'}
                    </Button>
                    <Button color="inherit" component={Link} to="/gallery">
                    {language === 'en' ? 'Gallery' : 'Galería'}
                    </Button>
                    <Button color="inherit" component={Link} to="/donations">
                    {language === 'en' ? 'Donations' : 'Donaciones'}
                    </Button>
                    <Button color="inherit" component={Link} to="/contact" style={{marginRight:"2vh"}}>
                    {language === 'en' ? 'Contact' : 'Contacto'}
                    </Button>
                
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>ES</Typography>
                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }}checked={language === 'en'}
                            onChange={handleLanguageChange} />
                        <Typography>EN</Typography>
                    </Stack>
                </>
                )}
            </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};

const ResponsiveMenu = ({ toggleDrawer, open, pages }) => {
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemText />
          <IconButton variant="body2" color="text.secondary">
            <MenuIcon />
          </IconButton>
        </ListItem>
        {pages.map(({ route, title, component }, index) => (
          <ListItem key={index + title} disablePadding>
            <ListItemButton
              onClick={toggleDrawer}
              component={component}
              smooth="true"
              to={route}
            >
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
};




export default ToolbarHere;