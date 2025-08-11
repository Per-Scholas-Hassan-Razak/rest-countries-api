import { InputLabel, MenuItem, Select, type SelectChangeEvent } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import { useState } from "react"

const RegionFilter = () => {

    const [region, setRegion] = useState<string>("")

     const handleChange = (e: SelectChangeEvent<string>) => {
    setRegion(e.target.value as string);
  };

  console.log("region", region)
    return (
   <FormControl sx={{
    minWidth:'500px',
    ml:4
   }}>
      <InputLabel id="region-label">Region</InputLabel>
      <Select<string>
        labelId="region-label"
        id="region-select"
        value={region}
        label="Region"
        onChange={handleChange}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="west">West</MenuItem>
        <MenuItem value="north">North</MenuItem>
        <MenuItem value="east">East</MenuItem>
      </Select>
    </FormControl>
    )
}

export default RegionFilter