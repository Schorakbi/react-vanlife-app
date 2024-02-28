import React from "react";
import Card from "../../components/Card"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../../api";


export default function Vans() {

    const [vans,setVans] = React.useState([])

    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)


    const typeFilter = searchParams.get("type");
    const displayedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [])

    const cards = displayedVans.map(van => {
        return(<Link key = {van.id} to={van.id} state={{ search: `?${searchParams.toString()}` }} className="link-to-van" aria-label={`View details for ${van.name}, 
        priced at $${van.price} per day`}>
            <Card 
            
            name = {van.name}
            price = {van.price}
            imageUrl = {van.imageUrl}
            type = {van.type}
        />
        </Link>)
    })

    return(
        <div className="vans">
            <h1 className="vans-title">Explore our van options</h1>
            <div className="vans-filter">
                <button className={`filter-simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={() => setSearchParams({ type: "simple" })}>Simple</button>
                <button className={`filter-luxury ${typeFilter === "luxury" ? "selected" : ""}`} onClick={() => setSearchParams({ type: "luxury" })}>Luxury</button>
                <button className={`filter-rugged ${typeFilter === "rugged" ? "selected" : ""}`} onClick={() => setSearchParams({ type: "rugged" })}>Rugged</button>
            </div>

            {typeFilter && <button className="clear-filters" onClick={() => setSearchParams({})}>Clear filters</button>}
            {loading ? <h1 aria-live="polite">Loading ...</h1> : error ? <h1 aria-live="assertive">There was an error : {error.message}</h1> : <div className="vans-grid">
                    {cards}
            </div>}
        </div>
    )

}