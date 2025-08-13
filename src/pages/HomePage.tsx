import { Stack } from "@mui/material";
import SearchInput from "../components/SearchInput";
import RegionFilter from "../components/RegionFilter";
import CountriesGrid from "../components/CountriesGrid";

const HomePage = () => {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        mt={4}
        sx={{
          width: "100%",
          justifyContent: { sm: "space-between" }, 
          alignItems: { xs: "stretch", sm: "center" }, 
        }}
      >
        <SearchInput />
        <RegionFilter />
      </Stack>

      <CountriesGrid />
    </>
  );
};

export default HomePage;
