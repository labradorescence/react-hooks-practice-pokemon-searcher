import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemonUrl, addNewPoke}) {

  const [form, setForm] = useState(null)
  
  function handleChange(e){
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(){

    let newPokemon = {
      name: form.name,
      hp: form.hp,
      sprites: {front: form.frontUrl,
                back: form.backUrl}
    }

    fetch(pokemonUrl, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokemon),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        addNewPoke(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...");
          handleSubmit()
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
