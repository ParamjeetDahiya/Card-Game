import React from 'react'
import './index.css';

export default function Cards(props) {
    console.log(props.name);
    
    return (
        <div className="card" onClick={()=>props.logic(props.name)}>
            {props.name}
        </div>
    )
}
