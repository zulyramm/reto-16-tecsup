import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import AboutUsPage from "../pages/AboutUsPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProductosPage from "../pages/ProductosPage";
import ServiciosPage from "../pages/ServiciosPage";

export const primaryRoute = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
       {
         path: 'productos',
         element: <h1><ProductosPage/></h1>
       },
      {
        path: 'servicios',
        element: <ServiciosPage/>
      },
      {
        path: 'nosotros',
        element: <AboutUsPage />
      },
      {
        path: 'contacto',
        element: <ContactPage />
      }
    ]
  }
]);