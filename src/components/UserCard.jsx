import React from 'react'
import { Link } from 'react-router-dom';
const UserCard=({cart})=>{
    return(
        <div>
             <h1>{cart.name}</h1>
              <h2>{cart.email}</h2>
              <Link to={`/info/${cart.id}`}> <button>info</button></Link>
             
        </div>
    )
}
export default UserCard;