import { ShoppingCart } from "@mui/icons-material";
import { AppBar,Badge,Box,Button,IconButton,Stack,Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";
const links = [
  {title: 'Home', to: '/'},
  {title: 'Catalog', to: '/catalog'},
  {title: 'About', to: '/about'},
  {title: 'Contact', to: '/contact'},
  {title: 'Error', to: '/error'},
]
const navLinkStyles = [
  { textDecoration: 'none', color: 'inherit', '&:hover': {color: "text.primary"}, '&.active': {color: "warning.main"} },
]
export default function Header() {
    return (
      <AppBar sx={{mb: 4}} position="static">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2}}>
            <Typography variant="h6" color="inherit">
              E-Commerce
            </Typography>
            <Stack direction="row" spacing={2}>
              {links.map((link)=>(
                <Button component={NavLink} to={link.to} key={link.title} sx={navLinkStyles}>
                  {link.title}
                </Button>
              ))}
            </Stack>
          </Box>
          <Box>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  );
}
