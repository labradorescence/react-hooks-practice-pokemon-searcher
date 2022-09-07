import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
const pokemonUrl = "http://localhost:3001/pokemon"

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])

  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    fetch(pokemonUrl)
      .then(resp => resp.json())
      .then(data => setPokemons(data))
  }, [])

  let searchedPokemon = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(inputValue.toLowerCase()))

  function addNewPoke(newPoke){
      console.log(newPoke)
      //spreading the new pokemon to the pokemon state
      setPokemons([...pokemons, newPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPoke={addNewPoke}/>
      <br />
      <Search  onHandleChange={setInputValue}/>
      <br />
      <PokemonCollection pokemons = {searchedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
