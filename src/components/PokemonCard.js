import {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {
  
  const [ isFront, setIsFront ] = useState(true)

  const handleImage = () => {
    setIsFront(!isFront)
  }

  const { name, sprites, hp} = poke

  return (
    <Card onClick={handleImage}>
      <div>
        <div className="image">
          <img src={isFront ? sprites.front : sprites.back} alt={name} />
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
