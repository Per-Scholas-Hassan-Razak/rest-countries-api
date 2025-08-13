import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import {Link} from 'react-router-dom'

interface CountryCardProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: {
    svg: string;
    png: string;
  };
  alpha3Code:string, 
  area:number
}

const CountryCard = ({
  name,
  population,
  region,
  capital,
  flags,
  alpha3Code,
  area
}: CountryCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ml: 5,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "3 / 2",
          bgcolor: "background.default",
        }}
      >
        <CardMedia
          component="img"
          src={flags.svg}
          alt={`flag-of-${name}`}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </Box>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Typography variant="h6">{name}</Typography>
        <Divider />
        <Typography variant="body2">
          Population: {population.toLocaleString()}
        </Typography>
        <Typography variant="body2">Region: {region}</Typography>
        <Typography variant="body2">Capital: {capital}</Typography>
      </CardContent>
      <Link
      to={`/${alpha3Code}`}
      >
      <CardActionArea
      sx={{
        display:'flex', 
        justifyContent:'flex-end', 
        alignItems:'center',
        px:1,
        py:0.5,
        borderRadius:1,
        
      }}
      >
        <InfoIcon fontSize="small" color="action" />
      </CardActionArea>
        </Link>
    </Card>
  );
};

export default CountryCard;
