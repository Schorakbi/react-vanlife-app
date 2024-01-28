import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanDetails() {
    const { currentVan } = useOutletContext();
    return(
    <div className="margin">
        <div className="inline-info">
            <h2>Name : </h2>
            <p>{currentVan.name}</p>
        </div>
        <div className="inline-info">
            <h2>Category : </h2>
            <p>{currentVan.type && currentVan.type[0].toUpperCase() + currentVan.type.slice(1)}</p>
        </div>
        <div className="inline-info">
            <h2>Description : </h2>
            <p>{currentVan.description}</p>
        </div>
        <div className="inline-info">
            <h2>Visibility : </h2>
            <p>Public</p>
        </div>
    </div>
    
    
    

    )
}