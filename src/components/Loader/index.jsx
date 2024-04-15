
import React from 'react';
import {GeneralContext} from '../../context/GeneralContext';
import '../../css/Loader.css'; 

const Building = () => {
    const {loading, progress} = React.useContext(GeneralContext);; 
    
  return (
    <div>
      {
        loading ? ( // Verificamos si está cargando
        <div  className="loader-container">
            <div className="loader">
            {progress}%
            </div> 
        </div>       
        ) : (
        <div/>
        )
      } 
    </div>
  );
};
export default Building;