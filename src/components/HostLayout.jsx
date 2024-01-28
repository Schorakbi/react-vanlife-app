import React, { useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
export default function HostLayout() {
  const style = {
    textDecoration : "underline",
    fontWeight : "bold",
    color : "#161616"
  }
  useEffect(() => {
    const openHam = document.querySelector('#openHam');
    const closeHam = document.querySelector('#closeHam');
    const navigationItems = document.querySelector('#navigation-items');

    const hamburgerEvent = (navigation, close, open) => {
      navigationItems.style.display = navigation;
      closeHam.style.display = close;
      openHam.style.display = open;
    };

    openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
    closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));

    return () => {
      openHam.removeEventListener('click', () => hamburgerEvent("flex", "block", "none"));
      closeHam.removeEventListener('click', () => hamburgerEvent("none", "none", "block"));
    };
  }, []);

  

  return (
    <>
      <nav className="host-navbar container">
        <div className="hamburger">
            <span id="openHam">&#9776;</span>
            <span id="closeHam">&#x2716;</span>
        </div>
        <div className="navigation-items" id="navigation-items">
            
            <NavLink end to="." className="dashboard-link" style={({isActive}) => isActive ? style : null}>
            Dashboard
            </NavLink>
            <NavLink to="income" className="income-link" style={({isActive}) => isActive ? style : null}>
            Income
            </NavLink>
            <NavLink to="vans" className="vans-link" style={({isActive}) => isActive ? style : null}>
            Vans
            </NavLink>
            <NavLink to="reviews" className="reviews-link" style={({isActive}) => isActive ? style : null}>
            Reviews
            </NavLink>
        </div>
        
      </nav>
      <Outlet/>
    </>
  );
}
