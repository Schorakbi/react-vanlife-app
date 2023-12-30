import React from "react";

export default function Card(props) {
    return(
        <div className="card-container">
            <img src={props.imageUrl} alt={`of ${props.name}`}></img>
            <div className="card-info">
                <h1 className="card-name">{props.name}</h1>
                <h3 className="card-price">${props.price}<span>/day</span></h3>
            </div>
            <i className={`van-type ${props.type} selected`}>{props.type[0].toUpperCase() + props.type.slice(1)}</i>
        </div>
    )
}