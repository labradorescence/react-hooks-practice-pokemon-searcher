import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
const url = "http://localhost:3001/pokemon"

function PokemonPage() {

  const [ pokemon, setPokemon ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState("")

  useEffect(() => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => setPokemon(data))
  }, [])

  console.log(searchTerm)

  const pokemonToDisplay = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddPokemon = (newPokemon) => {
    setPokemon([...pokemon, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
          url={url}
          onAddPokemon = {handleAddPokemon}/>
      <br />
      <Search 
        searchTerm = {searchTerm} 
        onChangeSearch={setSearchTerm}/>
      <br />
      <PokemonCollection 
        pokemon={pokemonToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
