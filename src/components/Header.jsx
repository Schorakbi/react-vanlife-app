import React from "react";
import { Link,NavLink } from "react-router-dom";
export default function Header() {
    return(
        <nav className="nav-bar container">
          <Link to ="/" className="home-link">#VANLIFE</Link>
          <NavLink to="/host" className={({isActive}) => isActive ? "host-link active-link" : "host-link"}>
             Host
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "about-link active-link" : "about-link"}>
             About
          </NavLink>
          <NavLink to="/vans" className={({isActive}) => isActive ? "vans-link active-link" : "vans-link"}>
             Vans
          </NavLink>
        </nav>
    );
}