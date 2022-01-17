import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect,useState} from 'react';
const Info=()=>{
    const [users, setUsers] = useState("")
    const{id}=useParams();
    useEffect(() => {
        const getUser=async()=>{
            try{
                const getOneUser=await axios.get(`https://jsonplaceholder.typicode.com/users${id}`);
                setUsers(getOneUser.data);
            }
        
          catch(error){
              console.log(error)
          }
        }
     getUser();
    }, [id])
    return(
        <div>
            <h2>{id}</h2>
             
        </div>
    )
}
export default Info;