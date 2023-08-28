import {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  
  const [ isFront, setIsFront ] = useState(true)

  const handleImage = () => {
    setIsFront(!isFront)
  }

  const { name, sprites, hp} = pokemon

  return (
    <Card onClick={handleImage}>
      <div>
        <div className="image">
          {isFront? <img alt={name} src={sprites.front} /> : <img alt={name} src={sprites.back} />}
          
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
