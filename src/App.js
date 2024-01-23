import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import React from "react"
import Home from "./components/Home"
import About from "./components/About"
import Vans from "./components/Vans"
import VanDetails from "./components/VanDetails"
import './App.css';
function App() {
  return (
    <>
      <BrowserRouter>
      <nav className="nav-bar container">
        <Link to ="/" className="home-link">#VANLIFE</Link>
        <Link to ="/about" className="about-link">About</Link>
        <Link to ="/vans" className="vans-link">Vans</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
    </BrowserRouter>
    <footer>
      <h1>Ⓒ 2024 #VANLIFE</h1>
    </footer> 
    </>
  );
}

export default App;
