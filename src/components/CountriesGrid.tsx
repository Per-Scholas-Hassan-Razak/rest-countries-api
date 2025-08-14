import { Grid} from "@mui/material";
import {  useFilter } from "../contexts/contexts";
import CountryCard from "./CountryCard";

const CountriesGrid = () => {
  const {filteredCountries} = useFilter();

  if (filteredCountries.length === 0) return <p>No Data available</p>;
  console.log(filteredCountries)

  return (
    <Grid container maxWidth="xl"  spacing={{ xs: 2, sm: 3, md: 3 }}  mt={4} alignItems='stretch'>
      
      {filteredCountries.map((country) => (
        <Grid item xs={12} sm={6} md={3} key={`${country.alpha3Code}`} sx={{display:'flex', justifyContent: "center"}}>
          <CountryCard {...country} />
        </Grid>
      ))}
    </Grid>

  );
};

export default CountriesGrid;
