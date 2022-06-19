import React, {useState, useEffect} from "react";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
// import Tweet from "./Tweet";
// import {nanoid} from 'nanoid'

export default function App(){

    const [apiData, setApiData] = useState([])

    useEffect(()=> {
        axios.get(`https://62adf581b735b6d16a3cc977.mockapi.io/sampleData`)

        .then((response) => { 
            setApiData(response.data)
        })
    }, [])

    const getData=()=> {
        axios.get(`https://62adf581b735b6d16a3cc977.mockapi.io/sampleData`)
        .then((getData) => {
            setApiData(getData.data)
        })
    }



    return(
        <Router>

            <main>
                <h1>Crud Operations</h1>
                <div>
                <Routes>
                     <Route path="/create" element={<Create/>} />
                     <Route path="/read" element={<Read apiData={apiData} getData={getData}/>} />
                     <Route path="/update" element={<Update/>} />
                
                </Routes>
                 </div>
             </main>

        </Router>
        
    )
}