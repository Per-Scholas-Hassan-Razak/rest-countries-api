import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <Navbar />

        <HomePage />
      </Container>
    </>
  );
}

export default App;
