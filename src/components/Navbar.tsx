import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1b1818ff" }}>
      <Toolbar variant="dense" sx={{ minHeight: 80, color:'white' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
          <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
         REST Countries API
        </Typography>

       
        <Typography variant="button" sx={{ cursor: "pointer", ml: 2 }}>
          Home
        </Typography>
        <Typography variant="button" sx={{ cursor: "pointer", ml: 2 }}>
          About
        </Typography>
        <Typography variant="button" sx={{ cursor: "pointer", ml: 2 }}>
          Contact
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
