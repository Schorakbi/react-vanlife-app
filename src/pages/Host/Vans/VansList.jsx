import React from "react";
import { NavLink } from "react-router-dom";


export default function VansList(props) {
    const [vans,setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
        .then(response => response.json())
        .then(data =>{ 
            setVans(data.vans)
    })
    },[])
    const vansList = vans.filter((van,index) => {
        return index === 0 || index === 1 || index === vans.length-1
    })
    const vansElements = vansList.map(van => {
        return(
            <div key={van.id}>
                
                {!props.condition ? <NavLink to={van.id} className="van-list-link">
                    <div className="vans-single-item">
                        <img className="vans-list-image" src={van.imageUrl} alt=""></img>
                        <div className="vans-list-text bold">
                            <h1 className="vans-list-text-title">{van.name}</h1>
                            <p className="vans-list-text-price">${van.price}/day</p>
                        </div> 
                        
                    </div>
                </NavLink> : <div className="vans-single-item">
                        <img className="vans-list-image" src={van.imageUrl} alt=""></img>
                        <div className="vans-list-text bold">
                            <h1 className="vans-list-text-title">{van.name}</h1>
                            <p className="vans-list-text-price">${van.price}/day</p>
                        </div>
                        <p className="bold edit-text">Edit</p>
                    </div>}
            </div>
        )
    })
    return(
        <>
            <div className={`${!props.condition ? "vans-list-container" :""}`}>
            {!props.condition && <h1 className="your-listed-vans">Your listed vans</h1>}
            {vansElements}
        </div>
        </>
    )
}