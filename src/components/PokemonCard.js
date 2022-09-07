import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const [front, setFront ] = useState(true)

  const {sprites, name, hp} = pokemon

  function clickFunc(){
    setFront(!front)
  }

  return (
    <Card onClick = {clickFunc}>
      <div>
         <div className="image">
           {front === true? 
           <img alt="oh no!" src={sprites.front}/> : <img alt="oh no!" src={sprites.back}/>
          }
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
