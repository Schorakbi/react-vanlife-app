import React from "react";
import HostVansList from "./Vans/HostVansList";

export default function Dashboard() {
    return(
        <>
            <div className="total-income">
                <div className="total-income-text">
                    <h1>Welcome!</h1>
                    <div className="details">
                        <p className="income-description">Income last <span className="underline highlighted">30 days</span></p>
                        <p className="bold">Details</p>
                    </div>
                    <h1>$2,260</h1>
                </div>
            </div>
            <div className="review-score">
                <div className="review-score">
                    <div className="review-score-text">
                        <div className="main">
                            <h1>Review score</h1>
                            <div className="five-pointed-star"></div><h1>5.0<span>/5</span></h1>
                        </div>
                        <p className="bold">Details</p>
                    </div>
                </div>
            </div>
            <div className="vans-list">
                <div className="vans-list-text">
                    <div className="vans-list-text-header">
                        <h1>Your listed vans</h1>
                        <p className="bold">View all</p>
                    </div>
                    <HostVansList
                        condition = {true} 
                    />
                </div>
            </div>
        </>
    )
}