import { IconButton } from "@mui/material"
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeToggle = () => {
    return(
        <>
          <IconButton color="inherit">
           <Brightness7Icon /> Light Mode
          </IconButton>
        
          <IconButton color="inherit">
            <Brightness4Icon /> Dark Mode
          </IconButton>
        </>
    )
}

export default ThemeToggle