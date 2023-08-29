import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
const API = "http://localhost:3001/pokemon"

function PokemonPage() {

  const [ pokemon, setPokemon ] = useState([])
  const [ searchTerm, setSearchTerm] = useState("")

  useEffect(()=> {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setPokemon(data))
  }, []) 

  const onHandleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm)
  }

  const pokemonToDisplay = pokemon.filter((poke) => {
    return poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const onSubmitNewPokeData = (newPoke) => {
    setPokemon([...pokemon, newPoke])
  }
 
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm API={API} onSubmitNewPokeData={onSubmitNewPokeData}/>
      <br />
      <Search onHandleSearch={onHandleSearch} searchTerm={searchTerm}/>
      <br />
      <PokemonCollection pokemon={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
