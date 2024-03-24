import React from "react";
import incomeGraph from "../../images/income-graph.png"
export default function Income() {
    const transactionsData = [
        { amount: 720, date: "1/12/22", id: "1" },
        { amount: 560, date: "10/11/22", id: "2" },
        { amount: 980, date: "23/11/22", id: "3" },
    ]
    return (
        <section className="host-income">
            <h1>Income</h1>
            <p>
                Last <span>30 days</span>
            </p>
            <h2>$2,260</h2>
            <img
                className="graph"
                src={incomeGraph}
                alt="Income graph"
            />
            <div className="info-header">
                <h3>Your transactions (3)</h3>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <div className="transactions">
                {transactionsData.map((item) => (
                    <div key={item.id} className="transaction">
                        <h3>${item.amount}</h3>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}