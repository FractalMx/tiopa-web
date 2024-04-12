import React from 'react';
import { Container, Typography } from '@mui/material';
import Gallery from '../components/Gallery';
import Building from '../components/Building';

const images = [
  { url: 'https://tse4.mm.bing.net/th?id=OIP.blxYHlHrnuLVtPB5BmuohAHaE8&pid=Api&P=0&h=180', title: 'Image 1', date: '2024-01-28' },
  { url: 'https://jooinn.com/images/group-of-people-18.jpg', title: 'Image 2', date: '2024-01-29' },
  // Agrega más imágenes según sea necesario
];

const Galery = () => {
    return (
      <Container>
        <Gallery images={images} />
        {/* <Building/> */}
      </Container>
    );
  };
  
  export default Galery;