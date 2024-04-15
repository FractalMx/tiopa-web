import React,{useState, useEffect} from 'react';
import Gallery from '../components/Gallery';
import {  useTheme } from '@mui/material';
import {GeneralContext} from '../context/GeneralContext';
import axiosClient from "../Config/axios";
import Toolbar from '../components/Toolbar';
import Loader from '../components/Loader';
import { ErrorOutline } from '@mui/icons-material';

const Galery = () => {
  const theme = useTheme();
  const {loading, changeLoading,language, snackMessage} = React.useContext(GeneralContext);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getFiles = async () => {
      try {
        changeLoading(true);
        const response = await axiosClient.get(`/tiopa/getFiles`);
        const filesToGaleria = response.data.files.FilesToGaleria;
        const imagesArray = [];
 
        // Iterate through the files and extract image URLs
        Object.keys(filesToGaleria).forEach(year => {
          const yearData = filesToGaleria[year];
          const yearImages = [];
  
          // Check if year has images
          const hasImages = Object.values(yearData).some(folder =>
            folder.hasOwnProperty('subfolders') ?
              Object.values(folder.subfolders).some(subfolder =>
                Object.keys(subfolder).length > 0
              ) :
              Object.keys(folder).length > 0
          );
  
          // If year has no images, skip it
          if (!hasImages) {
            return;
          }
  
          // Iterate through the folders and their images
          Object.keys(yearData).forEach(folder => {
            const folderData = yearData[folder];
            const folderImages = [];
  
            // If folder has no subfolders, add its images directly to folderImages
            if (!folderData.hasOwnProperty('subfolders')) {
              Object.keys(folderData).forEach(imageName => {
                const imageUrl = folderData[imageName].url;
                folderImages.push({ url: imageUrl, title: imageName, date: year });
              });
            } else {
              // If folder has subfolders, iterate through subfolders and their images
              Object.keys(folderData.subfolders).forEach(subfolder => {
                const subfolderData = folderData.subfolders[subfolder];
                Object.keys(subfolderData).forEach(imageName => {
                  const imageUrl = subfolderData[imageName].url;
                  folderImages.push({ url: imageUrl, title: imageName, date: year });
                });
              });
            }
  
            // Add folder with its images to yearImages
            yearImages.push({ folder, images: folderImages });
          });
  
          // Add year with its folders and images to imagesArray
          imagesArray.push({ year, folders: yearImages });
        });
  
       
        setImages(imagesArray);
        changeLoading(false);
      } catch (error) {
        snackMessage({
          message: language === 'en' ? "Sorry, the images couldn't be loaded at this time. Please try again later."
          :  "Lo sentimos, no se pudieron cargar las imágenes en este momento. Por favor, inténtalo de nuevo más tarde.",
          variant: "error",
        });
        setError(true);
        console.error('Error fetching files:', error);
        // Handle error
      }
    };
  
    getFiles();
  }, []);
    const [images, setImages] = useState([]);
  
    

    return (
      <div>
        <Loader/>
        <Toolbar/>
          {error ? (
            <div style={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <ErrorOutline sx={{ fontSize: 100, color: theme.palette.error.main }} />
              {language === 'en' ? (
                <>
                  <p style={{ fontSize: 24, fontWeight: 'bold', color: theme.palette.error.main }}>Oops! Something went wrong.</p>
                  <p style={{ fontSize: 16, textAlign: 'center', color: theme.palette.error.main }}>Sorry, the images couldn't be loaded at this time. Please try again later.</p>
                </>
              ) : (
                <>
                  <p style={{ fontSize: 24, fontWeight: 'bold', color: theme.palette.error.main }}>¡Ups! Algo salió mal.</p>
                  <p style={{ fontSize: 16, textAlign: 'center', color: theme.palette.error.main }}>Lo sentimos, no se pudieron cargar las imágenes en este momento. Por favor, inténtalo de nuevo más tarde.</p>
                </>
          )}
          </div>
          ):
          (
            <>
              <div style={{marginBottom:25}} />
              <Gallery images={images} />
            </>
          )
         }
        
        
      </div>
      
      
    );
  };
  
  export default Galery;