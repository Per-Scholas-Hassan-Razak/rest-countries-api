import {
  Box,
  Card,

  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

interface CountryCardProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: {
    svg: string;
    png: string;
  };
  alpha3Code: string;
  area: number;
}

const CountryCard = ({
  name,
  population,
  region,
  capital,
  flags,
  alpha3Code,
}: CountryCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        flex: 1,
        minWidth: 0,
        width: "350px",
        display: "flex",
        flexDirection: "column",
        height: { xs: 360, sm: 400, md: 440 },
      }}
    >
      <CardMedia
        component="img"
        src={flags.svg}
        alt={`flag-of-${name}`}
        sx={{
          width: "350px",
          height: { xs: 160, sm: 180, md: 200 },
          objectFit: "cover",
          display: "block",
          bgcolor: "background.default",
        }}
      />
      <CardContent sx={{ flexGrow: 1, minWidth: 0 }}>
        <Typography variant="h6" noWrap title={name}>
          {name}
        </Typography>
        <Divider />
        <Typography variant="body2">
          Population: {population.toLocaleString()}
        </Typography>
        <Typography variant="body2">Region: {region}</Typography>
        <Typography variant="body2">Capital: {capital}</Typography>
      </CardContent>
      <Box sx={{ px: 1, pb: 1, display: "flex", justifyContent: "flex-end" }}>
        <IconButton
          size="small"
          component={Link}
          to={`/${alpha3Code}`}
          aria-label={`See details for ${name}`}
        >
          <InfoIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default CountryCard;
