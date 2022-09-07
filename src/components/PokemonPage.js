import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
const pokemonURL = "http://localhost:3001/pokemon"

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [inputValue, setInputValue] = useState("")
  
  useEffect(()=>{
      fetch(pokemonURL)
        .then(resp => resp.json())
        .then(data => setPokemons(data))
  },[])

  console.log(pokemons)

  let searchedPokemon = pokemons.filter((pokemon) => pokemon!== undefined && pokemon.name !== undefined? pokemon.name.includes(inputValue): null)
  
  function addNewPokeFunc(newPoke){
    console.log(newPoke)
    setPokemons([...pokemons, newPoke])
    console.log(pokemons)
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPoke={addNewPokeFunc}/>
      <br />
      <Search inputValue={inputValue} onHandleChange={setInputValue}/>
      <br />
      <PokemonCollection pokemons={searchedPokemon} />
    </Container>
  );
}

export default PokemonPage;
