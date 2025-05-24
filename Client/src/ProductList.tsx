import { Grid } from "@mui/material";
import { IProduct } from "./model/IProduct";
import Product from "./Product";


interface Props {
    products: IProduct[];
}

export default function ProductList({products}: Props) {
    return (
      <Grid container spacing={2}>
        { products.map((p: IProduct) => (
            <Grid size={{xs:6, sm:4, lg:3}} key={p.id}>
                <Product  product={p} />
            </Grid>
        )) }
      </Grid>
    );
  }