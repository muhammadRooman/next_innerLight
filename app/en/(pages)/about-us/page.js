// app/aboutus/page.js

import Banner from "@/app/en/components/AboutUs/AboutBanner";  
import OurMission from "@/app/en/components/AboutUs/OurMission";  
import WhatWeOffer from "@/app/en/components/AboutUs/WhatWeOffer";  
import OurClients from "@/app/en/components/OurClients";  
import Commitment from "@/app/en/components/AboutUs/Commitment";  

export default function AboutBanner() {
    return (
      <>
        <Banner />
        <OurMission />
        <WhatWeOffer />
        <Commitment />
        <OurClients />
      </>
    );
  }
  