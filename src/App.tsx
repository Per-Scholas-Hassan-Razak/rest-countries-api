import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FilteredProvider from "./providers/FilteredProvider";

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <Navbar />
        <FilteredProvider>
          <HomePage />
        </FilteredProvider>
      </Container>
    </>
  );
}

export default App;
