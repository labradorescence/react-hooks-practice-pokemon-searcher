import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const [isFront, setIsFront] = useState(true)

  function checkFront(){
    setIsFront(!isFront)
  }

  return (
    <Card onClick={checkFront}>
      <div>
        <div className="image">
          {isFront===true? <img alt="oh no!" src={pokemon.sprites.front}/> : <img alt="oh no!" src={pokemon.sprites.back}/>}
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
