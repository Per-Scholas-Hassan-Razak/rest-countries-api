import { AppBar,Toolbar, Typography } from "@mui/material";
import ToggleTheme from './ThemeToggle'

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#797676ff" }}>
      <Toolbar variant="dense" sx={{ minHeight: 80, color:'' }}>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Where in the world?
        </Typography>

        <ToggleTheme />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
