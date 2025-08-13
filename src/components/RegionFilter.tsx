import {
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import { useCountryBackUp, useFilter } from "../contexts/contexts";

const RegionFilter = () => {
  const { countriesBU } = useCountryBackUp();

  const { region, setRegion, regions} = useFilter();

  // const [regions, setRegions] = useState<string[]>([]);

// useEffect(() => {
//   const uniqueRegions = [...new Set(filteredCountries.map(c => c.region))].sort();
//   setRegions(uniqueRegions);
// }, [filteredCountries]);

  const handleChange = (e: SelectChangeEvent<string>) => {
    setRegion(e.target.value as string);
  };

  return (
    <FormControl
      sx={{
        minWidth: "500px",
        ml: 4,
      }}
    >
      <InputLabel id="region-label">Select Region</InputLabel>
      <Select<string>
        labelId="region-label"
        id="region-select"
        value={region}
        label="Filter Countries by Region"
        onChange={handleChange}
      >
        <MenuItem value="">All Regions</MenuItem>
        {regions.map((r) => (
          <MenuItem value={r}>{r}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default RegionFilter;
