import { Button, Grid } from "@mui/material";
import CountryDetail from "../components/CountryDetail";
import { Link as RouterLink } from "react-router-dom";

const DetailPage = () => {
  return (
    <>
      <Grid container spacing={4} mt={14} alignItems="stretch">
        <Grid item>
          <Button
            // key={code}
            variant="outlined"
            size="small"
            sx={{ textTransform: "none" }}
            component={RouterLink}
            to="/"
          >
            Back
          </Button>
        </Grid>
        <CountryDetail />
      </Grid>
    </>
  );
};

export default DetailPage;
