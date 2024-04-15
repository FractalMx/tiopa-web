import { createBrowserRouter } from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import Home from './pages/Home';
import Gallery from './pages/Galery';
import Donations from './pages/Donations';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NoMatch />,
    },
    {
        path: "/gallery",
        element: <Gallery />,
        errorElement: <NoMatch />,
    },
    {
        path: "/donations",
        element: <Donations />,
        errorElement: <NoMatch />,
    },
    {
        path: "/contact",
        element: <Contact />,
        errorElement: <NoMatch />,
    },
    

  ])  