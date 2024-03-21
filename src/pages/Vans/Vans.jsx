import React, { Suspense } from "react";
import Card from "../../components/Card";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return defer({ vans: getVans() });
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData();

  const typeFilter = searchParams.get("type");
  function renderVans(vans) {
    const displayedVans = typeFilter
      ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
      : vans;

    const cards = displayedVans.map((van) => {
      return (
        <Link
          key={van.id}
          to={van.id}
          state={{ search: `?${searchParams.toString()}` }}
          className="link-to-van"
          aria-label={`View details for ${van.name}, 
            priced at $${van.price} per day`}
        >
          <Card
            name={van.name}
            price={van.price}
            imageUrl={van.imageUrl}
            type={van.type}
          />
        </Link>
      );
    });
    return (
      <>
        <div className="vans-filter">
          <button
            className={`filter-simple ${
              typeFilter === "simple" ? "selected" : ""
            }`}
            onClick={() => setSearchParams({ type: "simple" })}
          >
            Simple
          </button>
          <button
            className={`filter-luxury ${
              typeFilter === "luxury" ? "selected" : ""
            }`}
            onClick={() => setSearchParams({ type: "luxury" })}
          >
            Luxury
          </button>
          <button
            className={`filter-rugged ${
              typeFilter === "rugged" ? "selected" : ""
            }`}
            onClick={() => setSearchParams({ type: "rugged" })}
          >
            Rugged
          </button>
        </div>

        {typeFilter && (
          <button className="clear-filters" onClick={() => setSearchParams({})}>
            Clear filters
          </button>
        )}
        <div className="vans-grid">{cards}</div>
      </>
    );
  }

  return (
    <div className="vans">
      <h1 className="vans-title">Explore our van options</h1>
      <Suspense fallback={<h2>Loading ...</h2>}>
        <Await resolve={dataPromise.vans}>{renderVans}</Await>
      </Suspense>
    </div>
  );
}
