import React from "react";
import { useParams } from "react-router-dom";
export default function SingeVanInfos() {
    const params = useParams();
    const [van,setVan] = React.useState(null)
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
        van ? (
    <div className="margin">
        <div className="inline-info">
            <h2>Name : </h2>
            <p>{van.name}</p>
        </div>
        <div className="inline-info">
            <h2>Category : </h2>
            <p>{van.type && van.type[0].toUpperCase() + van.type.slice(1)}</p>
        </div>
        <div className="inline-info">
            <h2>Description : </h2>
            <p>{van.description}</p>
        </div>
        <div className="inline-info">
            <h2>Visibility : </h2>
            <p>Public</p>
        </div>
    </div>
    
    
    
    ) : <div className="margin"><h2>Loading ...</h2></div>
    )
}