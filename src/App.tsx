import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FilteredProvider from "./providers/FilteredProvider";
import CountryBUProvider from "./providers/CountryBUProvider";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo, useState } from "react";

import { darkTheme, lightTheme } from "./theme/theme";
function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(
    () => (mode === "dark" ? darkTheme : lightTheme),
    [mode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <CountryBUProvider>
          <Container >
            <Navbar mode={mode} setMode={setMode} />
            <FilteredProvider>
              <HomePage />
            </FilteredProvider>
          </Container>
        </CountryBUProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
