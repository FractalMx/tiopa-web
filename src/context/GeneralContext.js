import { createContext, useState, useContext, useEffect, useCallback} from 'react';
import { withSnackbar } from "notistack";
// Crear un contexto de idioma
export const GeneralContext = createContext();

const GeneralProvider = ({ children, enqueueSnackbar }) => {

  const [language, setLanguage] = useState('es'); // Definir el idioma inicial, 'es' para español
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0); 

  const snackMessage = useCallback(
    ({
      message = "No Message",
      variant = "default",
      preventDuplicate = true,
      anchorOrigin = { horizontal: "right", vertical: "bottom" }
    }) => {
      enqueueSnackbar(message, {
        variant,
        preventDuplicate,
        anchorOrigin,
      });
    },
    [enqueueSnackbar],
  )
  ;
  // Función para cambiar el idioma

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const changeLoading = (load) => {
    setLoading(load);
  };

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    console.log(userLanguage)
    const languageTo = userLanguage === 'en-US' ? 'en' :'es';
    setLanguage(languageTo);
  }, [])
  
  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        // Incrementar el progreso cada segundo mientras se está cargando
        setProgress(prevProgress => (prevProgress < 100 ? prevProgress + 10 : 100));
        if(progress === 100){
          setLoading(false);
        }
      }, 100);
    } else {
      // Reiniciar el progreso cuando la carga haya terminado
      
      setProgress(0);
    }

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, [loading, progress, setProgress]);

  return (
    <GeneralContext.Provider value={{ language, changeLanguage, loading, changeLoading, progress, snackMessage }}>
      {children}
    </GeneralContext.Provider>
  );
};




export default withSnackbar(GeneralProvider);