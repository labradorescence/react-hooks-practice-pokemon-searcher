import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onSubmitNewPokemon }) {

  const initialForm = {
    name: "",
    hp: 0,
    frontUrl:"",
    backUrl:"",
  }

  const [ formData, setFormData ] = useState(initialForm)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = () => {
    const newPoke = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
    }}

    fetch("http://localhost:3001/pokemon", {
      method:"POST",
      headers:{
        "content-type": "application/json", 
      },
      body: JSON.stringify(newPoke)
    })
    .then(resp => resp.json())
    .then(data => onSubmitNewPokemon(data))

    setFormData(initialForm)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            onChange={handleChange}
            value={formData.name}
            />
          <Form.Input fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            onChange={handleChange}
            value={formData.hp}
            />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={formData.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={formData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
