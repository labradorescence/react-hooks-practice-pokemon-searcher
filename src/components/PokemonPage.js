import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [ pokemons, setPokemons ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(data => setPokemons(data))
  }, [])
   
  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm)
  }

  const searchedPokemon = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const onSubmitNewPokemon = (newPoke) => {
    setPokemons([...pokemons, newPoke])
    console.log(newPoke)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm  onSubmitNewPokemon = {onSubmitNewPokemon}/>
      <br />
      <Search handleSearchChange={handleSearchChange}/>
      <br />
      <PokemonCollection pokemons = {searchedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
