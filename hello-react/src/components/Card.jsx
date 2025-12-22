import React from "react";

function Card(props){
    return(
        <div style={{
            border:'1px solid gray',
            borderRadius:'8px',
            padding:'20px',
            margin:'10px auto',
            maxWidth:'300px'
        }}>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Card;