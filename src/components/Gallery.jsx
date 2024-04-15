import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  CircularProgress,
  Box,
} from '@mui/material';
import { ArrowBack, ArrowForward, Close } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const Gallery = ({ images }) => {
  const theme = useTheme();
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(true);
  };

  const handleOpenDialog = (year) => {
    setSelectedYear(year);
    setSelectedImageIndex(0);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedYear(null);
    setSelectedImageIndex(null);
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      Math.min(
        prevIndex + 1,
        images.find((item) => item.year === selectedYear)?.folders.flatMap((folder) => folder.images).length - 1
      )
    );
  };

  return (
    <div style={{height:'100vh'}}>
      <Grid container spacing={2}>
        {images.map(({ year, folders }, yearIndex) => (
          
          <Grid item xs={12} sm={6} md={4} lg={3} key={year}>
            <motion.div
            key={year}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: yearIndex * 0.2 }}
          >
            {folders.length > 0 && (
              <Card
                onClick={() => handleOpenDialog(year)}
                sx={{
                  backgroundColor: 'transparent',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                >
                 
                  <Box sx={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                  {!loading && <CircularProgress />}
                    <CardMedia
                      component="img"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'fill',
                        filter: 'brightness(70%)',
                        display: !loading ? 'none' : 'block', // Ocultar la imagen mientras se carga
                      }}
                      image={folders[0].images.length > 0 ? folders[0].images[0].url : ''}
                      alt={folders[0].images.length > 0 ? folders[0].images[0].title : ''}
                      onLoad={handleImageLoad}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        width: '100%',
                        color: 'white',
                        zIndex: 1,
                      }}
                    >
                      
                      <Typography variant="h1" component="div">{year}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            )}
          </motion.div>
          </Grid>
         
        ))}
      </Grid>

      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogContent>
          <IconButton
            onClick={handlePreviousImage}
            aria-label="previous"
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              color: theme.palette.primary.main,
              zIndex: 1,
            }}
            disabled={selectedImageIndex === 0}
          >
            <ArrowBack />
          </IconButton>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: 0,
              paddingBottom: '56.25%', // 16:9 aspect ratio
            }}
          >
            {selectedYear !== null && (
              <img
                src={
                  images.find((item) => item.year === selectedYear)?.folders.flatMap((folder) => folder.images).map((image) => image.url)[selectedImageIndex]
                }
                alt={
                  images.find((item) => item.year === selectedYear)?.folders.flatMap((folder) => folder.images).map((image) => image.title)[selectedImageIndex]
                }
                style={{ position: 'absolute', width: '100%', height: '100%',objectFit: 'contain', }}
              />
            )}
            <CircularProgress
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: theme.palette.primary.main,
                visibility: selectedYear !== null ? 'hidden' : 'visible',
              }}
            />
          </Box>
          <IconButton
            onClick={handleNextImage}
            aria-label="next"
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              color: theme.palette.primary.main,
              zIndex: 1,
            }}
            disabled={
              selectedImageIndex ===
              images.find((item) => item.year === selectedYear)?.folders.flatMap((folder) => folder.images).length - 1
            }
          >
            <ArrowForward />
          </IconButton>
        </DialogContent>
        <DialogActions>
          <IconButton
            onClick={handleCloseDialog}
            aria-label="close"
            sx={{
              position: 'absolute',
              right: theme.spacing(1),
              top: theme.spacing(1),
              color: theme.palette.primary.main,
            }}
          >
            <Close />
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Gallery;




