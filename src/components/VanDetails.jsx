import React from "react";
import { Link, useParams } from "react-router-dom";

export default function VanDetails() {
  const params = useParams();
  const [van, setVan] = React.useState({});

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

  return (
    <div className="container margin-block">
        <Link to="/vans" className="back-to-all-vans"><i className="arrow left"></i>Back to all vans</Link>
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
