// app/aboutus/page.js

import EventBanner from "@/components/Event/EventBanner";  
import SpiritualEvents from "@/components/Event/SpiritualEvents";  
import SignUpNow from "@/components/Event/SignUpNow";   
import OurClients from "@/components/OurClients";  

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
  