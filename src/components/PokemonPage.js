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
      .then(response => response.json())
      .then(pokemonArr => setPokemon(pokemonArr))
  },[])

  //console.log(pokemon) //[]

  const onHandleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const searchedPokemonArr = pokemon.filter((onePoke) => {
    return onePoke.name.toLowerCase().includes(searchTerm.toLowerCase())
  }) //"", 0, false 

  console.log(searchedPokemonArr)

  const onSubmitNewPokemon = (newlyAddedPokemon) => {
    setPokemon([...pokemon, newlyAddedPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmitNewPokemon={onSubmitNewPokemon}/>
      <br />
      <Search searchTerm={searchTerm} onHandleChange={onHandleChange}/>
      <br />
      <PokemonCollection pokemon={searchedPokemonArr}/>
    </Container>
  );
}

export default PokemonPage;
