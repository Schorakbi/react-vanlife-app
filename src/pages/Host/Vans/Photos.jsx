import React from "react";
import { useOutletContext } from "react-router-dom"
export default function Photos() {
    const { currentVan } = useOutletContext();
    return(
        <div className="image-gallery margin-block">
            <img src={currentVan.imageUrl} alt={`of ${currentVan.name}`} className="gallery-image"/>
        </div>
    )
}