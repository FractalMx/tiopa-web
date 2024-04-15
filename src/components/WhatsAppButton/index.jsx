import React from 'react';
import { styled } from '@mui/system';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const StyledFab = styled(Fab)({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
});

const WhatsAppButton = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
  };

  return (
    <Tooltip title="Contact via WhatsApp" arrow>
      <StyledFab color="primary" onClick={handleWhatsAppClick}>
        <WhatsAppIcon />
      </StyledFab>
    </Tooltip>
  );
};

export default WhatsAppButton;
