import React from "react";
import { useOutletContext } from "react-router-dom";
export default function Pricing() {
  const { currentVan } = useOutletContext();
    return(
        <div className="pricing margin-block-2">
            <h1>${currentVan.price}.00</h1>
            <p className="price-span">/day</p>
        </div>
    )
}