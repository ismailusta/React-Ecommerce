import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { IProduct } from "./model/IProduct";
import { AddShoppingCart } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';


interface Props {
    product: IProduct
}

export default function Product({product}: Props) {
    return (
     <Card>
        <CardMedia sx={{height: 200, backgroundSize: "contain"}} image={`http://localhost:5166/images/${product.imageUrl}`}/>
        <CardContent>
           <Typography gutterBottom variant="h6" component="h2" color="text.secondary">
                {product.name}  
           </Typography>
              <Typography variant="body2" color="secondary">
                 {(product.price).toFixed(2)} €
                </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="success" variant="outlined" startIcon={<AddShoppingCart/>}>
                Add to cart
            </Button>
            <Button size="small" color="secondary" variant="outlined" startIcon={<SearchIcon/>}>
                View
            </Button>
        </CardActions>
     </Card>
    );
  }
  