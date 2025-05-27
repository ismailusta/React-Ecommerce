import { Button, Card, Container, Divider, Typography } from "@mui/material";
import { NavLink } from "react-router";

export default function NotFoundError() {
    return (
        <Container component={Card} sx={{ p: 3}}>
            <Typography variant="h5" gutterBottom>
                Page Not Found
            </Typography>
            <Divider />
            <Typography variant="body2">
                Sorry, the page you are looking for does not exist.
            </Typography>
            <Button variant="contained" component={NavLink} to="/catalog" color="secondary" sx={{ mt: 2 }}>
                Continue Shopping
            </Button>
        </Container>
    );
}
