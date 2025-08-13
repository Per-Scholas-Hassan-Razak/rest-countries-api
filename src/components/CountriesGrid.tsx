import {Grid} from "@mui/material";
import {  useFilter } from "../contexts/contexts";
import CountryCard from "./CountryCard";

const CountriesGrid = () => {
  const {filteredCountries} = useFilter();

  if (filteredCountries.length === 0) return <p>No Data available</p>;

  return (
    <Grid container spacing={20} mt={4}>
      {filteredCountries.map((country) => (
        <Grid item xs={12} sm={6} md={3} key={country.alpha3Code}>
          <CountryCard {...country} />
        </Grid>
      ))}
    </Grid>

  );
};

export default CountriesGrid;
