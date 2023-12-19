import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) { //[]

  const pokeCards = pokemon.map( eachPokemon => { //[].map //eachpokemon==={}
    return <PokemonCard poke={eachPokemon} key={eachPokemon.id}/>
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokeCards}
    </Card.Group>
  );
}

export default PokemonCollection;
