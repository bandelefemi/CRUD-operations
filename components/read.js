import React from "react";
import { Button, Table } from "semantic-ui-react";
import {Link} from 'react-router-dom'
import axios from "axios";


export default function Read(props){

    
    const setData=(data)=> {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const onDelete=(id)=> {
        axios.delete(`https://62adf581b735b6d16a3cc977.mockapi.io/sampleData/${id}`)
        .then(()=> {
            props.getData()
        })
    }

  

    return(
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Fitst Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {props.apiData.map((data)=>{
                        return(
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox? 'checked': 'unchecked'}</Table.Cell>
                                <Link to='/update' target="_blank">
                                    <Table.Cell>
                                        <Button onClick={()=> setData(data)}>update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={()=> onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                             </Table.Row>
                        )
                    })}

                   
                </Table.Body>
               
            </Table>
        </div>
    )
}