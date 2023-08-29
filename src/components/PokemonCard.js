import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {

  const [showFront, setShowFront ] = useState(true)

  const handleClick = () => setShowFront(!showFront)

  const { name, sprites, hp} = poke

  // const pokeImage = showFront ? sprites.front : sprites.back;
  // const pokeAlt = pokeImage ? name : "oh no!";
  return (
    <Card>
      <div onClick = {handleClick}>
        <div className="image">
          <img alt={name} src={ showFront? sprites.front : sprites.back} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
