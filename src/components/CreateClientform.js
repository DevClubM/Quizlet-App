import React, {useState, useRef} from 'react'
import { Form, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';


const CreateClientform = (props) => {
   
  const [currentArr, setCurrentArr] = useState(props.clients);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");


  const setValues = () => {
    const client = {
        name: name,
        gender: gender,
        id: uuidv4()
    };
    console.log()
    return client;
  }




  return (    
    <Form style={{backgroundColor: 'white', font: 'Century Gothic', padding: '5rem', marginBottom: '2rem'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control onInput={(e) => {setName(e.target.value)}} value={name} type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Gender</Form.Label>
            <Form.Control onInput={(e) => {setGender(e.target.value)}} value={gender}  type="text" placeholder="Gender" />
        </Form.Group>
        <Button onClick={ () => {props.getClient(setValues())} } variant="primary">
            Submit
        </Button>
    </Form>
  )
}

export default CreateClientform

