// app/aboutus/page.js
import EventBanner from "@/components/Event/EventBanner";  
import SpiritualEvents from "@/components/Event/SpiritualEvents";  
// import SignUpNow from "@/components/Event/SignUpNow";   
import Testimonial from "@/components/Testimonial";  
import { WebinarApi } from "../../../components/api/WebinarApi";

const fetchWebinarData = async () => {
  try {
    const response = await WebinarApi();
    return response;
  } catch (error) {
    return { error: "An error occurred while fetching the webinar data." };
  }
};

export default async function Event() {
  const webinarData = await fetchWebinarData();
  const webinarEvenData = webinarData.events
    return (
      <>
        <EventBanner /> 
        <SpiritualEvents webinarEvenData={webinarEvenData} />
        {/* <SignUpNow /> */}
        <Testimonial />
      </>
    );
  }
  