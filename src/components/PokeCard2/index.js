import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import PokeStats from "../PokeStats";

export default function PokeCard({id, name, image}) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "black"}}>
      <CardActionArea>
        <Box xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px', backgroundColor: "#3c3c3c"}}>
          <Typography gutterBottom variant="h5" paddingTop="5px" fontWeight= "bold" color= "#fff" component="div">
          {id.toString().padStart(3, '0')}
        </Typography>
        </Box>
        <CardMedia component="img" height={200} image={image}></CardMedia>
        <Box xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', backgroundColor: "#3c3c3c"}}>
        <Typography gutterBottom variant="h5"  paddingTop="5px" fontWeight= "bold" color= "#fff" component="div">
          {name.replace(/^./,(str) => str.toUpperCase())}
        </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
