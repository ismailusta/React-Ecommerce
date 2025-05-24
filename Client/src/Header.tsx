import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function Header() {
    return (
      <AppBar sx={{mb: 4}} position="static">
        <Toolbar>
            <Container>
                <Typography variant="h6" color="inherit">
                    E-Commerce
                </Typography>
            </Container>
        </Toolbar>
      </AppBar>
    );
  }