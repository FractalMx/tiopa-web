import React from 'react';
import { styled } from '@mui/system';

// Estilos para el componente BlackBox
const BlackBoxContainer = styled('div')({
  backgroundColor: 'black',
  width: '100%',
  padding: '40px',
  textAlign: 'center',
  color: 'white',
  transition: 'background-color 0.5s ease',
});

const TextBox = styled('div')({
  maxWidth: '100%',
  margin: 'auto',
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'opacity 0.5s ease, transform 0.5s ease',
  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const Home = () => {
  return (
    <div>
      {/* Tu contenido actual de la página principal */}
      <h1>Bienvenido a Tiopa Tlanextli Santuario de Luz</h1>
      
      {/* Nuevo componente BlackBox */}
      <BlackBox />
    </div>
  );
};

// Componente BlackBox
const BlackBox = () => {
  // Agregamos un estado para manejar la visibilidad del texto
  const [isVisible, setIsVisible] = React.useState(false);

  // Usamos useEffect para cambiar la visibilidad después de que el componente se monta
  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <BlackBoxContainer>
      {/* Agregamos la clase "visible" cuando el estado isVisible es true */}
      <TextBox className={isVisible ? 'visible' : ''}>
        <h2>Asociación Civil Tiopa Tlanextli Santuario de Luz</h2>
        <p>
          Somos una asociación civil comprometida con el bienestar de nuestra comunidad.
          Trabajamos para promover la educación, la cultura y el desarrollo sostenible.
          Con tu apoyo, podemos lograr un impacto positivo en la vida de las personas.
        </p>
      </TextBox>
    </BlackBoxContainer>
  );
};

export default Home;
