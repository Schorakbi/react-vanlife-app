import React from "react";
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetails, { loader as vanDetailsLoader } from "./pages/Vans/VanDetails";
import Host from "./components/HostLayout";
import HostVansList, { loader as hostVansListLoader } from "./pages/Host/Vans/HostVansList";
import Pricing from "./pages/Host/Vans/Pricing";
import HostVanDetails from "./pages/Host/Vans/HostVanDetails";
import Photos from "./pages/Host/Vans/Photos";
import HostVanDetailLayout, { loader as hostVanDetailsLoader } from "./components/HostVanDetailLayout";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import Dashboard from "./pages/Host/Dashboard";
import PageNotFound from "./pages/PageNotFound";

import { requireAuth } from "./utils/RequireAuth";

import "./server"

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} loader={loginLoader} action={loginAction} />
    <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
    <Route path="vans/:id" element={<VanDetails />} loader={vanDetailsLoader} />
    <Route path="host" element={<Host />}>
      <Route index element={<Dashboard />} loader={hostVansListLoader} />
      <Route path="vans" element={<HostVansList />} loader={hostVansListLoader} />

      <Route path="vans/:id" element={<HostVanDetailLayout />} loader={hostVanDetailsLoader}>
        <Route index element={<HostVanDetails />} loader={async ({ request }) => await requireAuth(request)} />
        <Route path="pricing" element={<Pricing />} loader={async ({ request }) => await requireAuth(request)} />
        <Route path="photos" element={<Photos />} loader={async ({ request }) => await requireAuth(request)} />
      </Route>

      <Route path="reviews" element={<Reviews />} loader={async ({ request }) => await requireAuth(request)} />
      <Route path="income" element={<Income />} loader={async ({ request }) => await requireAuth(request)} />
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
