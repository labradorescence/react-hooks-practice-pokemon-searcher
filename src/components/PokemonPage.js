import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [ pokemon, setPokemon ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(data => setPokemon(data))
  }, [])
   
  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm)
  }

  const pokemonToDisplay = pokemon.filter((poke) => {
    return poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const onSubmitNewPokemon = (newPoke) => {
    setPokemon([...pokemon, newPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />

      <PokemonForm  
        onSubmitNewPokemon = {onSubmitNewPokemon}/>

      <br />

      <Search 
        searchTerm = {searchTerm} 
        handleSearchChange={handleSearchChange}/>

      <br />

      <PokemonCollection pokemon = {pokemonToDisplay}/>

    </Container>
  );
}

export default PokemonPage;
