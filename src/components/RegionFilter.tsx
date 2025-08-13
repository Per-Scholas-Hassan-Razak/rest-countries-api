import {
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useFilter } from "../contexts/contexts";

const RegionFilter = () => {
  const { region, setRegion, regions } = useFilter();
  const handleChange = (e: SelectChangeEvent<string>) => {
    setRegion(e.target.value as string);
  };

  return (
    <FormControl
      size="small"
      sx={{
        minWidth: { sm: 320 },
      }}
    >
      <InputLabel id="region-label">Filter Region</InputLabel>
      <Select<string>
        labelId="region-label"
        id="region-select"
        value={region}
        label="Select Region"
        onChange={handleChange}
        displayEmpty={false}
      >
        <MenuItem value="">
          {regions.length === 0 ? "No Regions Exists" : "All Regions"}
        </MenuItem>
        {regions.map((r) => (
          <MenuItem value={r}>{r}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default RegionFilter;
