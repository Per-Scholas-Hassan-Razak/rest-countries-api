import { Button } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import type { ToggleThemeProps } from "../types";

const ThemeToggle = ({ mode, setMode }: ToggleThemeProps) => {
  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <Button
      color="inherit"
      startIcon={mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      onClick={toggleTheme}
    >
      {mode === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  );
};

export default ThemeToggle;
