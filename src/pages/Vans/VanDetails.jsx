import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../api"

export function loader({ params }) {
    return getVans(params.id)
}

export default function VanDetails() {
  const van = useLoaderData();
  const location = useLocation();


  return (
    <div className="container margin-block">
        <Link to={`..${location.state.search !== null ? location.state.search : ""}`} relative="path" className="back-to-all-vans"><i className="arrow left"></i>Back to all vans</Link>
        <div className="van-details-container">
          <img src={van.imageUrl} alt={`of ${van.name}`} />
          <div className="van-details">
              <div className="van-details-name-type">
                  <i className={`van-type ${van.type} selected`}>{van.type && van.type[0].toUpperCase() + van.type.slice(1)}</i>
                  <h1 className="van-name">{van.name}</h1>
              </div>
              <div className="van-info">
                  <h3 className="van-price">${van.price}<span>/day</span></h3>
                  <p>{van.description}</p>
              </div>
                  <button>Rent this van</button>
          </div>
        </div>
    </div>
  );
}
