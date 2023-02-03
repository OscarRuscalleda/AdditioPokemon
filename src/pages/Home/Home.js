import React, {useEffect, useState} from "react"
import { Container } from "@mui/material"
import { Grid }from "@mui/material"
import NavBar from "../../components/NavBar"
import PokeCard from "../../components/PokeCard2"
import axios from "axios"
import { FooterContainer } from "../../React Footer/Footer"
import './home.css'
import {PokemonDetail} from '../../components/PokemonDetail/PokemonDetail'



export const Home = () => {
    const [pokemon, setPokemon] = useState([]);
    const [showPokemonDetail, setShowPokemonDetail] = useState(false)
    const [pokemonDetail, setPokemonDetail] = useState({})

    useEffect(() => {
        getPokemon();
    }, []);
    const getPokemon = () => {
        var endpoints = [];
        for (var i = 1; i < 151; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemon(res));
    };
    const pokeFilter = (name)   => {
        var filterPoke = []
        if(name=== ""){
            getPokemon();
        }
        for (var i in pokemon) {
            if(pokemon[i].data.name.includes(name)){
                filterPoke.push(pokemon[i]);
            }
        }
        setPokemon(filterPoke);
    };
    
    return (
    <div className="container-home">
     { showPokemonDetail && <PokemonDetail pokemonDetail={pokemonDetail} setShowPokemonDetail={setShowPokemonDetail} />}
      <NavBar pokeFilter={pokeFilter}/>
      <div className="container-pokemon-list">
      <Container maxWidth="xg">
        <Grid container spacing={3}>
            {pokemon.map((pokemon, key) => (
                <Grid item xs={2} key={key}>
                    <PokeCard  id={pokemon.data.id} name={pokemon.data.name} image={pokemon.data.sprites.other["official-artwork"].front_default} setShowPokemonDetail={setShowPokemonDetail} pokeInfo={pokemon.data} setPokemonDetail={setPokemonDetail}/>
                </Grid>
            ))}
        </Grid> 
      </Container>
      </div>
      <FooterContainer/>
    </div>
  )
}