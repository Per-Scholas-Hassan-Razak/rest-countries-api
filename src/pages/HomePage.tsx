import { Box } from "@mui/material";
import SearchInput from "../components/SearchInput";
import RegionFilter from "../components/RegionFilter";
import CountriesGrid from "../components/CountriesGrid";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          mt: 4,
        }}
      >
        <SearchInput />
        <RegionFilter />
      </Box>
      <CountriesGrid />
    </>
  );
};

export default HomePage;
