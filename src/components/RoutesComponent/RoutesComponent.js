import React,{useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import Toolbar from '../Toolbar/Toolbar';
import Home from '../../pages/Home';
import Gallery from '../../pages/Galery';
import Donations from '../../pages/Donations';
import Contact from '../../pages/Contact';
import NoMatch from "../NoMatch/NoMatch";
import { useLoading } from '../../context/GeneralContext'; // Importa el hook useLoading
import '../../css/Loader.css'; 

const RoutesComponent =( ) => {
  const {loading, changeLoading} = useLoading(); // Obtenemos el estado de carga del contexto
  const [progress, setProgress] = useState(0); // Estado local para el progreso de carga

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        // Incrementar el progreso cada segundo mientras se está cargando
        setProgress(prevProgress => (prevProgress < 100 ? prevProgress + 10 : 100));
        if(progress === 100){
          changeLoading(false);
        }
      }, 100);
    } else {
      // Reiniciar el progreso cuando la carga haya terminado
      
      setProgress(0);
    }

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, [loading, progress, setProgress, changeLoading]);

  


  return (
    <div   >
    
      {
        loading ? ( // Verificamos si está cargando
        <div  className="loader-container">
            <div className="loader">
              Cargando... ({progress}%)
            </div> 
            </div>       
        ) : (
          <div/>
        )
      }  
      
      <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Toolbar />
      <div style={{ flex: 1, overflow: 'auto' }}> {/* Esto asegura que el contenido dentro de Routes ocupe el resto de la pantalla */}
        <Routes>
          <Route path="/" element={<Home />} errorElement={<NoMatch />} />
          <Route path="/gallery" element={<Gallery />} errorElement={<NoMatch />} />
          <Route path="/donations" element={<Donations />} errorElement={<NoMatch />} />
          <Route path="/contact" element={<Contact />} errorElement={<NoMatch />} />
        </Routes>
      </div>
    </div>
       
      
    </div>
  );
}

export default RoutesComponent;