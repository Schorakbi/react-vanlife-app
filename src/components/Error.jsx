import React from "react"
import { useRouteError } from "react-router-dom" 

export default function Error () {

    const error = useRouteError();
    return (
        <div className="error">
            <h1>Something went wrong ...</h1>
            <h3>{error.message}</h3>
            <pre>{error.status} - {error.statusText}</pre>
        </div>
    )

}