import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link,NavLink } from "react-router-dom";
export default function SingleVanDetailsLayout() {
    const style = {
        textDecoration : "underline",
        fontWeight : "bold",
        color : "#161616"
    }
    const [van,setVan] = React.useState(null)
    const params = useParams();
    React.useEffect(() => {
        if (params.id) {
          fetch(`/api/vans/${params.id}`)
            .then(response => response.json())
            .then(data => {
              setVan(data.vans);
            })
            .catch(error => {
              console.error("Error fetching data:", error);
            });
        }
      }, [params]);
    return(
        <div className="container">
            <Link to=".." relative="path" className="back-to-all-vans"><i className="arrow left"></i>Back to all vans</Link>
            {van ? <div className="white-background">
                <div className="single-van-details margin-block">
                <img src={van.imageUrl} alt={`of ${van.name}`} className="single-van-details-image margin"/>
                <div className="van-details-name-type">
                  <i className={`van-type ${van.type} selected`}>{van.type && van.type[0].toUpperCase() + van.type.slice(1)}</i>
                  <h1 className="van-name">{van.name}</h1>
                  <p><span className="bold">${van.price}</span>/day</p>
                </div>
            </div>
            <div className="margin host-van-navbar">
            
                <NavLink end to="" className="details-link" style={({isActive}) => isActive ? style : null}>
                Details
                </NavLink>
                <NavLink to="pricing" className="pricing-link" style={({isActive}) => isActive ? style : null}>
                Pricing
                </NavLink>
                <NavLink to="photos" className="photos-link" style={({isActive}) => isActive ? style : null}>
                Photos
                </NavLink>
            
        </div>
        <Outlet />
            </div> : <h2>Loading ...</h2>}
        </div>
    )
}