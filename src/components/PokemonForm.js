import React, { useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( {API, onSubmitNewPokeData}) {

  // const [ name, setName ] = useState("")
  // const [imageFront, setImageFront] = useState("")
  // const [imageBack, setImageBack] = useState("")
  // const [hp, setHp] = useState(0)

  // console.log(name, imageFront, imageBack, hp)

  const initialForm = {
    name: "",
    hp: 0,
    frontUrl:"",
    backUrl:""
  }
  const [ formData, setFormData ] = useState(initialForm)

  const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    const newPoke = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoke)
    })
    .then(resp => resp.json())
    .then(onSubmitNewPokeData)

    setFormData(initialForm)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" 
          value={formData.name}
          onChange={handleChange}
          />
          
          <Form.Input fluid label="hp" placeholder="hp" name="hp" 
          value={formData.hp}
          onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
