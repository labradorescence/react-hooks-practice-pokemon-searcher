import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  let [front, setFront] = useState(true)

  const clickFunc = () => {
    setFront(!front)
  }
  return (
    <Card onClick={clickFunc}>
      <div>
        {front===true? 
            <div className="image">
            <img alt="oh no!" src={pokemon.sprites.front} />
            </div>
            :
            <div className="image">
            <img alt="oh no!" src={pokemon.sprites.back} />
            </div>
        }     
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
