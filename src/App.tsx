import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FilteredProvider from "./providers/FilteredProvider";
import CountryBUProvider from "./providers/CountryBUProvider";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo, useState } from "react";

import { darkTheme, lightTheme } from "./theme/theme";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
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
          <FilteredProvider>
            <Container>
              <Navbar mode={mode} setMode={setMode} />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:countryId" element={<DetailPage />} />
                 <Route path="*" element={<div>Not found</div>} />
              </Routes>
            </Container>
          </FilteredProvider>
        </CountryBUProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
