import React, {useState} from "react";
import { Form } from "semantic-ui-react";
const pokemonURL = "http://localhost:3001/pokemon"

function PokemonForm({addNewPoke}) {

  const [ newPoke, setNewPoke ] = useState(null)

  function handleNewPoke(e){
    setNewPoke({
      ...newPoke,
      [e.target.name]: e.target.value
    })
    //console.log(newPoke)
  }

  function handleSubmit(){
    console.log("handle submit")
    let newPokeForm = {
      name: newPoke.name,
      hp: newPoke.hp,
      sprites:{
        front: newPoke.frontUrl,
        back: newPoke.backUrl,
      },
    }

    fetch(pokemonURL, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokeForm),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        addNewPoke()
      })
      .catch((error) => {
        console.error('Error:', error);
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          console.log("submitting form...");
          handleSubmit(e)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name"             
            onChange={handleNewPoke}/>
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp"             
            onChange={handleNewPoke}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleNewPoke}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleNewPoke}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
