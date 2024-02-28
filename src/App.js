import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Host from "./components/HostLayout";
import "./App.css";
import HostVansList from "./pages/Host/Vans/HostVansList";
import Pricing from "./pages/Host/Vans/Pricing";
import HostVanDetails from "./pages/Host/Vans/HostVanDetails";
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
            <Route path="vans" element={<HostVansList />} />

            <Route path="vans/:id" element={<HostVanDetailLayout />}>
              <Route index element={<HostVanDetails />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>

            <Route path="reviews" element={<Reviews />} />
            <Route path="income" element={<Income />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
