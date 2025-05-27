import { createBrowserRouter, Navigate } from "react-router";
import App from "../components/App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CatalogPages from "../pages/catalog/CatalogPages";
import ProductDetailPage from "../pages/catalog/ProductDetailPage";
import ErrorPage from "../pages/ErrorPage";
import ServerError from "../errors/ServerError";
import NotFoundError from "../errors/NotfoundError";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <HomePage />},
            {path: "about", element: <AboutPage />},
            {path: "contact", element: <ContactPage />},
            {path: "catalog", element: <CatalogPages />},
            {path: "error", element: <ErrorPage />},
            {path: "server-error", element: <ServerError />},
            {path: "not-found", element: <NotFoundError />},
            {path: "catalog/:id", element: <ProductDetailPage />},
            {path: "*", element: <Navigate to="/not-found"/>},
        ],
    },
]);

