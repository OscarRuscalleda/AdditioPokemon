import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

export default function PokeCard({id, name, image, pokeInfo, setShowPokemonDetail, setPokemonDetail }) {
  
  return (
    <Card  
      sx={{ maxWidth: 345, backgroundImage:"url(/imatges/bg.png)",backgroundSize:"cover"}}
      onClick={() => { 
        setShowPokemonDetail(true) 
        setPokemonDetail(pokeInfo)
      }}
    >
      <CardActionArea>
        <Box xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px', backgroundColor: "#3c3c3c"}}>
          <Typography gutterBottom variant="h5" paddingTop="5px" fontWeight= "bold" color= "#fff" component="div">
          {id.toString().padStart(3, '0')}
        </Typography>
        </Box>
        <CardMedia component="img" height={240} image={image}></CardMedia>
        <Box xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', backgroundColor: "#3c3c3c"}}>
        <Typography gutterBottom variant="h5"  paddingTop="5px" fontWeight= "bold" color= "#fff" component="div">
          {name.replace(/^./,(str) => str.toUpperCase())}
        </Typography>
        </Box>
      </CardActionArea>
    </Card>

  );
}