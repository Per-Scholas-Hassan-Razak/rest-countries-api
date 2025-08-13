import { TextField } from "@mui/material";
import { useFilter } from "../contexts/contexts";

const SearchInput = () => {

  const {setSearchTerm} = useFilter();

  const handleTextInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  
  return (
    <TextField
      sx={{
        flexGrow:1
      }}
      id="outlined-basic"
      label="Search Countries by name, capital, or population..."
      variant="outlined"
      onChange={handleTextInput}
    />
  );
};

export default SearchInput;
