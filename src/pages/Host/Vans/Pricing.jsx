import React from "react";
import { useParams } from "react-router-dom";
export default function Pricing() {
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
    return(van ?
        <div className="margin pricing">
            <h1>${van.price}.00</h1>
            <p className="price-span">/day</p>
        </div> : <div className="margin"><h2>Loading ...</h2></div>
    )
}