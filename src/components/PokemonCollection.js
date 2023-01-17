import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  const poke = pokemon.map((poke)=> (
    <PokemonCard key = {poke.id} pokemon = {poke}/>
  ))
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {poke}
    </Card.Group>
  );
}

export default PokemonCollection;
