import { Box, Typography } from "@mui/material";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Box
    sx={{
        display:'flex',
        justifyContent:'space-between',
        height:100,
        border:'2px solid black',
        alignItems:'center',
        elevation:23

    }}
    >
      <Typography sx={{ color: "black", padding:'5px' }} variant="h6">
        Where In the World?
      </Typography>
      <ThemeToggle />
    </Box>
  );
};

export default Header;
