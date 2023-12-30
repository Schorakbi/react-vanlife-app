import React from "react";
import Card from "./Card"
import {Link} from "react-router-dom"
export default function Vans() {
    const [vans,setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
        .then(response => response.json())
        .then(data =>{ 
            setVans(data.vans)
    })
    },[])
    const cards = vans.map(van => {
        return(<Link key = {van.id} to={`/vans/${van.id}`} className="link-to-van" aria-label={`View details for ${van.name}, 
        priced at $${van.price} per day`}>
            <Card 
            
            name = {van.name}
            price = {van.price}
            imageUrl = {van.imageUrl}
            type = {van.type}
        />
        </Link>)
    })
    return(
        <div className="vans">
            <h1 className="vans-title">Explore our van options</h1>
            <div className="vans-filter">
                <button className="filter-simple">Simple</button>
                <button className="filter-luxury">Luxury</button>
                <button className="filter-rugged">Rugged</button>
                
                
            </div>
            <button className="clear-filters">Clear filters</button>
            <div className="vans-grid">
                    {cards}
            </div>
        </div>
    )
}