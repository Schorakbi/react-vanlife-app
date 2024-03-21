import React, { Suspense } from "react";
import { NavLink, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../../utils/RequireAuth";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

export default function VansList(props) {
  const dataPromise = useLoaderData();
  function renderVans(vans) {
    const vansElements = vans.map((van) => {
      return (
        <div key={van.id}>
          {!props.condition ? (
            <NavLink to={van.id} className="van-list-link">
              <div className="vans-single-item">
                <img
                  className="vans-list-image"
                  src={van.imageUrl}
                  alt=""
                ></img>
                <div className="vans-list-text bold">
                  <h1 className="vans-list-text-title">{van.name}</h1>
                  <p className="vans-list-text-price">${van.price}/day</p>
                </div>
              </div>
            </NavLink>
          ) : (
            <div className="vans-single-item">
              <img className="vans-list-image" src={van.imageUrl} alt=""></img>
              <div className="vans-list-text bold">
                <h1 className="vans-list-text-title">{van.name}</h1>
                <p className="vans-list-text-price">${van.price}/day</p>
              </div>
              <p className="bold edit-text">Edit</p>
            </div>
          )}
        </div>
      );
    });
    return vansElements;
  }

  return (
    <>
      <div className={`${!props.condition ? "vans-list-container" : ""}`}>
        {!props.condition && (
          <h1 className="your-listed-vans">Your listed vans</h1>
        )}
        <Suspense fallback={<h2>Loading ...</h2>}>
          <Await resolve={dataPromise.vans}>{renderVans}</Await>
        </Suspense>
      </div>
    </>
  );
}
