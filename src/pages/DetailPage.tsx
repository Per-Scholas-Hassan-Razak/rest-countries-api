import { Link, useParams } from "react-router-dom";
import { useCountryBackUp } from "../contexts/contexts";
import { useMemo } from "react";
import type { Country } from "../types";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const DetailPage = () => {
  const { countryId } = useParams();
  const { countriesBU } = useCountryBackUp();

  const country: Country | undefined = useMemo(() => {
    if (!countryId) return undefined;
    const id = countryId.toUpperCase();
    return countriesBU.find((c) => c.alpha3Code.toUpperCase() === id);
  }, [countriesBU, countryId]);

  if (!country) {
    return <Typography sx={{ mt: 4 }}>Country not found.</Typography>;
  }

  return (
    <>
      <Grid item xs={12} md={6}>
        <Link to="/">Back</Link>
      </Grid>
      <Grid
        container
        spacing={4}
        mt={14}
        key={country.alpha3Code}
        alignItems="stretch"
      >
        <Grid item xs={12} md={6} sx={{ display: "flex", flex: 1 }}>
          <Card
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ position: "relative", width: "100%", aspectRatio: "3 / 2" }}
            >
              <CardMedia
                component="img"
                image={country.flag}
                alt={`flag-of-${country.name}`}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", flex: 1 }}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardHeader title={country.name} />

            <CardContent sx={{ flex: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1}>
                    <Typography variant="body2">
                      <strong>Native Name:</strong> {country.nativeName}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Population:</strong>{" "}
                      {country.population.toLocaleString()}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Region:</strong> {country.region}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Sub Region:</strong> {country.subregion}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Capital:</strong> {country.capital}
                    </Typography>
                  </Stack>
                </Grid>

                {/* Right column */}
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1}>
                    <Typography variant="body2">
                      <strong>Top Level Domain:</strong>{" "}
                      {country.topLevelDomain.join(", ")}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Currencies:</strong>{" "}
                      {country.currencies.map((c) => c.name).join(", ")}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Languages:</strong>{" "}
                      {country.languages.map((l) => l.name).join(", ")}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>

              <Stack
                direction="row"
                flexWrap="wrap"
                alignItems="center"
                gap={1}
                mt={4}
              >
                <Typography variant="body2" sx={{ mr: 1 }}>
                  <strong>Border Countries:</strong>
                </Typography>
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  alignItems="center"
                  gap={1}
                  mt={4}
                >
                  {country.borders?.length ? (
                    country.borders.map((code) => (
                      <Button
                        key={code}
                        variant="outlined"
                        size="small"
                        sx={{ textTransform: "none" }}
                        component={RouterLink}
                        to={`/${code}`}
                      >
                        {code}
                      </Button>
                    ))
                  ) : (
                    <Typography variant="body2">None</Typography>
                  )}
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailPage;
