import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState } from 'react'
import axios from 'axios'


export default function Create(){

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checkbox, setCheckbox] = useState(false)


    const postData=()=> {
       
        axios.post(`https://62adf581b735b6d16a3cc977.mockapi.io/sampleData`, {
            firstName,
            lastName,
            checkbox
        })

    }

    return (
        <Form className='create-form'>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' onChange={(e)=> setFirstName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' onChange={(e)=> setLastName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=> setCheckbox(!checkbox)} />
    </Form.Field>
    <Button type='submit' onClick={postData}>Submit</Button>
  </Form>
    )
}
