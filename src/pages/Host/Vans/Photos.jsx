import React from "react";
import { useParams } from "react-router-dom";
export default function Photos() {
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
        <div className="image-gallery margin-block">
            <img src={van.imageUrl} alt={`of ${van.name}`} className="gallery-image"/>
        </div> : <div className="margin"><h2>Loading ...</h2></div>
    )
}