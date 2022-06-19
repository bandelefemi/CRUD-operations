import React, {useState, useEffect} from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import axios from "axios";


export default function Update(){

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [id, setId] = useState(null)

    useEffect(()=> {
        setId(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'))
        setLastName(localStorage.getItem('Last Name'))
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, [])

    const updateApiData=()=> {
        axios.put(`https://62adf581b735b6d16a3cc977.mockapi.io/sampleData/${id}`, {
            firstName,
            lastName,
            checkbox
        })
    }

    // console.log(firstName && firstName)
    return(
        <div>
            <Form className='create-form'>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                     <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=> setCheckbox(!checkbox)} />
                </Form.Field>
                <Button type='submit' onClick={updateApiData}>Submit</Button>
            </Form>
        </div>
    )
}