import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  CircularProgress,
  Box,
} from '@mui/material';
import { ArrowBack, ArrowForward, Close } from '@mui/icons-material';

const years = Array.from({ length: 13 }, (_, index) => 2011 + index);

const imagesByYear = {};

years.forEach((year) => {
  imagesByYear[year] = Array.from({ length: 10 }, (_, index) => ({
    url: `https://source.unsplash.com/random?calendar&${year}-${index + 1}`,
    title: `Image ${index + 1}`,
    date: `${year}-01-01`,
  }));
});
console.log(imagesByYear)
const Gallery = () => {
  const theme = useTheme();
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0
        ? imagesByYear[selectedYear].length - 1
        : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === imagesByYear[selectedYear].length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handleOpenDialog = (year, index) => {
    setSelectedYear(year);
    setSelectedImageIndex(index);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
 
 
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleKeyDown = (event) => {
    if (dialogOpen) {
      switch (event.key) {
        case 'ArrowLeft':
          handlePrevImage();
          break;
        case 'ArrowRight':
          handleNextImage();
          break;
        default:
          break;
      }
    }
  };
  return (
    <div onKeyDown={handleKeyDown}>
      <Grid container spacing={2} margin={1}>
        {years.map((year) => (
          <Grid item key={year} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  '& img': {
                    transform: 'scale(1.1)',
                  },
                  '& button': {
                    opacity: 1,
                  },
                },
              }}
            >
               {isLoading && (
                <CircularProgress
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: theme.palette.primary.main,
                  }}
                />
              )}
              <CardMedia
                component="img"
                height="200"
                image={imagesByYear[year]?.[0]?.url} // Use the first image as a representative image
                alt={`Representative Image for ${year}`}
              />
              <CardContent>
                <Typography variant="h6">{year}</Typography>
              </CardContent>
              <Button
                variant="contained"
                onClick={() => handleOpenDialog(year, 0)}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  position: 'absolute',
                  bottom: '16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
              >
                View Images
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        
      >
        <DialogContent>
          <IconButton
            onClick={handlePrevImage}
            aria-label="previous"
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              color: theme.palette.primary.main,
              zIndex: 1,
            }}
          >
            <ArrowBack />
          </IconButton>
          {imagesByYear[selectedYear]?.[selectedImageIndex] && (
            <Card>
              {isLoading && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <CircularProgress color="primary" />
                </Box>
              )}
              <CardMedia
                component="img"
                height="480"
                image={imagesByYear[selectedYear][selectedImageIndex].url}
                alt={imagesByYear[selectedYear][selectedImageIndex].title}
                onLoad={handleImageLoad}
                style={{ display: isLoading ? 'none' : 'block' }}
              />
              <CardContent>
                <Typography variant="subtitle1">
                  {imagesByYear[selectedYear][selectedImageIndex].title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {imagesByYear[selectedYear][selectedImageIndex].date}
                </Typography>
              </CardContent>
            </Card>
          )}
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



