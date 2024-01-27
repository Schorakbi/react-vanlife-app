import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Host from "./components/HostLayout";
import "./App.css";
import VansList from "./pages/Host/Vans/VansList";
import Pricing from "./pages/Host/Vans/Pricing";
import HostVanDetail from "./pages/Host/Vans/HostVanDetail";
import Photos from "./pages/Host/Vans/Photos";
import HostVanDetailLayout from "./components/HostVanDetailLayout";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import Dashboard from "./pages/Host/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="host" element={<Host />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<Host />}>
            <Route path="" element={<Dashboard />} />
            <Route path="vans" element={<VansList />} />

            <Route path="vans/:id" element={<HostVanDetailLayout />}>
              <Route index element={<HostVanDetail />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>

            <Route path="reviews" element={<Reviews />} />
            <Route path="income" element={<Income />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
