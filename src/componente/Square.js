import React from 'react'


export default function Square(props){
    return(
        <button className="aquare" onclick={props.onclick}>
            {props.value}
        </button>
    )
}
