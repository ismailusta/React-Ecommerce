import { Card, Container, Divider, Typography } from "@mui/material";
import { useLocation } from "react-router"

export default function ServerError() {
    const state = useLocation();
    return (
        <Container component={Card} sx={{ p: 3}}>
            {state?.state.error ?(
                <>
                    <Typography variant="h3" gutterBottom>
                        {state.state.error.title}- {state.state.error.status}
                    </Typography>
                    <Divider />
                    <Typography variant="body2">
                        {state.state.error.detail || "Unknown Error"}
                    </Typography>
                </>
            ):(
               <Typography variant="h5" gutterBottom>
                    Server Error
                </Typography> 
            )}
        </Container>
    );
}
