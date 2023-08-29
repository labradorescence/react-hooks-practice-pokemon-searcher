import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const pokeCard = pokemon.map((poke) => {
    return <PokemonCard key={poke.id} poke={poke} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokeCard}
    </Card.Group>
  );
}

export default PokemonCollection;
