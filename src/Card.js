import React from 'react'

export default function (props) {
    return (
        <div>
        <h2>{props.prod.title}</h2>
        <h2>{props.prod.description}</h2>
        <h2>{props.prod.price}</h2>
        <button>{props.prod.title}</button>
        <button>{props.prod.description}</button>
        <button>{props.prod.price}</button>
        <p></p> 
        </div>
    )
}
