import { CircularProgress, Divider, Grid, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IProduct } from "../../model/IProduct";
import requests from "../../api/requests";
export default function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        requests.Catalog.details(Number(id))
        .then(data => setProduct(data))
        .catch(error => console.error("Error fetchingx product:", error))
        .finally(() => setLoading(false));
    },[id])
    if (loading) {
        return <CircularProgress />;
    }
    if (!product) {
        return <Typography variant="h3">Product not found</Typography>;
    }
    return (
        <Grid container spacing={6}> 
            <Grid size={{xl: 3, lg: 4, md:5, sm: 6, xs: 12}}>
                <img src={`http://localhost:5166/images/${product.imageUrl}`} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            </Grid>
            <Grid size={{xl: 9, lg: 8, md:7, sm: 6, xs: 12}}>
                <Typography variant="h3" >{product.name}</Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h4" color="secondary">
                    {(product.price).toFixed(2)} €
                </Typography>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell>{product.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Stock</TableCell>
                            <TableCell>{product.stock}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell>{product.description}</TableCell>
                        </TableRow>
                </TableBody>
                </Table>
            </Grid>
        </Grid>
    );
}