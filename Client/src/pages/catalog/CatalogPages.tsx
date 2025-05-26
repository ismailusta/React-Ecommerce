import { useEffect, useState } from "react";
import { IProduct } from "../../model/IProduct";
import ProductList from "./ProductList";
import { CircularProgress } from "@mui/material";
import requests from "../../api/requests"

export default function CatalogPages() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        requests.Catalog.list()
        .then(data => setProducts(data))
        .catch(error => console.error("Error fetching products:", error))
        .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <ProductList products={products} />
    );
}
    

