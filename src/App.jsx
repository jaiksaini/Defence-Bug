import React from "react";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import Missions from "./Pages/Missions";
import Footer from "./Pages/Footer";
import WhatWeSay from "./Pages/WhatWeSay";
import VcisoServices from "./Pages/VcisoServices";
import Contact from "./Pages/Contact";
import BrandCollab from "./Pages/BrandCollab";
import WhatCustomersSay from "./Pages/WhatCustomersSay";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Missions />
      <WhatWeSay />
      <VcisoServices />
      <BrandCollab />
      <WhatCustomersSay />
      <Contact />
      <Footer />
    </div>
  );
}
