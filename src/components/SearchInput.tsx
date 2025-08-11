import { TextField } from "@mui/material";

const SearchInput = () => {

  const handleTextInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  
  return (
    <TextField
      sx={{
        flexGrow:1
      }}
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      onChange={handleTextInput}
    />
  );
};

export default SearchInput;
