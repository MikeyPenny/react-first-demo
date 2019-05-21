import React from 'react'
import "./card.css"

const Card = (props)=> {
    
    let firstName = "Sir." + props.firstname
    let lastName = "Mc." + props.lastname
    
    return (
        <div className="card">        
            <h1>{firstName} {lastName}</h1>
            <p>{props.email}</p>
        </div>
)}

export default Card