import { Box, Card, CardContent,  CardMedia,  Divider, Typography } from "@mui/material";

interface CountryCardProps {
  name:string;
  population:number;
  region:string;
  capital:string
  flags:{
    svg:string;
    png:string
  }
}

const CountryCard = ({name,population,region,capital,flags }: CountryCardProps) => {
  return (
    <Card variant="outlined" sx={{ width:'100%', height: "100%", display: "flex", flexDirection: "column",ml:5}}>
      <Box sx={{ position: "relative", width: "100%", aspectRatio: "3 / 2", bgcolor: "background.default" }}>
        <CardMedia
          component="img"
          src={flags.svg}         
          alt={`flag-of-${name}`}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height:"100%",
            objectFit: "contain", 
            display: "block",
            
          }}
        />
      </Box>
     <CardContent sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Typography variant="h6">{name}</Typography>
        <Divider />
        <Typography variant="body2">Population: {population.toLocaleString()}</Typography>
        <Typography variant="body2">Region: {region}</Typography>
        <Typography variant="body2">Capital: {capital}</Typography>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
