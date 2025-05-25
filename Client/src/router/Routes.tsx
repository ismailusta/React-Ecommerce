import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CatalogPages from "../pages/catalog/CatalogPages";
import ProductDetailPage from "../pages/catalog/ProductDetailPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <HomePage />},
            {path: "/about", element: <AboutPage />},
            {path: "/contact", element: <ContactPage />},
            {path: "/catalog", element: <CatalogPages />},
            {path: "/catalog/:id", element: <ProductDetailPage />},
        ],
    },
]);

