// app/aboutus/page.js

import EventBanner from "@/components/Event/EventBanner";  
import SpiritualEvents from "@/components/Event/SpiritualEvents";  
// import SignUpNow from "@/components/Event/SignUpNow";   
import Testimonial from "@/components/Testimonial";  

export default function Event() {
    return (
      <>
        <EventBanner /> 
        <SpiritualEvents />
        {/* <SignUpNow /> */}
        <Testimonial />
      </>
    );
  }
  