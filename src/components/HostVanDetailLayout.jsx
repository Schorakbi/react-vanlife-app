import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Link,NavLink } from "react-router-dom";
import { getHostVans } from "../api";
import { requireAuth } from "../utils/RequireAuth";

export async function loader({ params, request }) {
    await requireAuth(request)
    return getHostVans(params.id)
}

export default function HostVanDetailLayout() {
    const style = {
        textDecoration : "underline",
        fontWeight : "bold",
        color : "#161616"
    }
    const currentVan = useLoaderData();
    
    return(
        <div className="container">
            <Link to=".." relative="path" className="back-to-all-vans"><i className="arrow left"></i>Back to all vans</Link>
            <div className="white-background">
                <div className="single-van-details margin-block">
                <img src={currentVan.imageUrl} alt={`of ${currentVan.name}`} className="single-van-details-image margin-block"/>
                <div className="van-details-name-type">
                  <i className={`van-type ${currentVan.type} selected`}>{currentVan.type && currentVan.type[0].toUpperCase() + currentVan.type.slice(1)}</i>
                  <h1 className="van-name">{currentVan.name}</h1>
                  <p><span className="bold">${currentVan.price}</span>/day</p>
                </div>
            </div>
            <div className="margin host-van-navbar">
            
                <NavLink end to="." className="details-link" style={({isActive}) => isActive ? style : null}>
                Details
                </NavLink>
                <NavLink to="pricing" className="pricing-link" style={({isActive}) => isActive ? style : null}>
                Pricing
                </NavLink>
                <NavLink to="photos" className="photos-link" style={({isActive}) => isActive ? style : null}>
                Photos
                </NavLink>
            
            </div>
            <Outlet context={{ currentVan }}/>
        </div>
        </div>
    )
}