import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import ToggleTheme from "./ThemeToggle";
import type { NavBarProps } from "../types";

const Navbar = ({ mode, setMode }: NavBarProps) => {

  return (
    <AppBar>
      <Toolbar
        variant="dense"
        sx={{
          minHeight: { xs: 64, sm: 8, lg: 20, xl: 70 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          gap: { xs: 1, sm: 0 },
          py: { xs: 1, sm: 0 },
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: { xs: 0, sm: 1 },
            textAlign: { xs: "center", sm: "left" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          Where in the world?
        </Typography>
        <Box
          sx={{
            width: { xs: "100%", sm: "auto" },
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-end" },
            
          }}
        >
          <ToggleTheme mode={mode} setMode={setMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
