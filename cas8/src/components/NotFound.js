import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () =>{

    return(
        <div id="not-found">
            <h1>Error!!! No route matches this URL</h1>
            <h2><Link to='/home'>Go back to Home page</Link></h2>
        </div>
    )
}