// app/aboutus/page.js

import EventBanner from "@/app/en/components/Event/EventBanner";  
import SpiritualEvents from "@/app/en/components/Event/SpiritualEvents";  
import SignUpNow from "@/app/en/components/Event/SignUpNow";   
import OurClients from "@/app/en/components/OurClients";  

export default function Event() {
    return (
      <>
        <EventBanner /> 
        <SpiritualEvents />
        <SignUpNow />
        <OurClients />
      </>
    );
  }
  