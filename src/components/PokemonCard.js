import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( { poke }) { //obj de-structuring

  // console.log(poke) //{}
  const { name, sprites, hp } = poke
  //const { keyname1, keyname2, keyname3 } = objectname (object de-structuring)

  const [ showFront, setShowFront ] = useState(true)
  
  const handleClick = () => {
    setShowFront(!showFront)
    //setShowFront((prev) => !prev)
  }

  return (
    <Card onClick = {handleClick}>
      <div>
        <div className="image">
          <img alt={name} src={showFront? sprites.front: sprites.back} />
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
