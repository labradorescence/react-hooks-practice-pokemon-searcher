import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
const pokemonUrl = "http://localhost:3001/pokemon"
//11:30pm - 12:09am 39mins

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    fetch(pokemonUrl)
      .then(resp=> resp.json())
      .then(data => setPokemons(data))
  },[])

  let searchedPokemons = pokemons.filter((pokemon)=> pokemon.name.includes(inputValue))

  function addNewPoke(newPoke){
    setPokemons([...pokemons, newPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemonUrl={pokemonUrl} addNewPoke={addNewPoke}/>
      <br />
      <Search handleSearch={setInputValue}/>
      <br />
      <PokemonCollection pokemons={searchedPokemons}/>
    </Container>
  );
}

export default PokemonPage;
