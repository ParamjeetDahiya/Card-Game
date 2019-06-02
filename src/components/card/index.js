import React from 'react'
import './index.css';

export default function Cards(props) {
    return (
        <div className="card" onClick={()=>props.logic(props.name)}>
            {props.name}
        </div>
    )
}
