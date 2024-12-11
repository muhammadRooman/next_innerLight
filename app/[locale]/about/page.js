// app/aboutus/page.js

import Banner from "@/components/AboutUs/AboutBanner";  
import OurMission from "@/components/AboutUs/OurMission";  
import WhatWeOffer from "@/components/AboutUs/WhatWeOffer";  
import Testimonial from "@/components/Testimonial";  
import Commitment from "@/components/AboutUs/Commitment";  

export default function AboutBanner() {
    return (
      <>
        <Banner />
        <OurMission />
        <WhatWeOffer />
        <Commitment />
        <Testimonial />
      </>
    );
  }
  