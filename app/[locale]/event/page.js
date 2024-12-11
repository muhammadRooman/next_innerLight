// app/aboutus/page.js
import EventBanner from "@/components/Event/EventBanner";  
import SpiritualEvents from "@/components/Event/SpiritualEvents";  
import SignUpNow from "@/components/Event/SignUpNow";   
import Testimonial from "@/components/Testimonial";  
import { WebinarApi } from "../../../components/api/WebinarApi";

console.log("WebinarApi",WebinarApi);
/**
 * Fetches CmsWebData data from the CmsWebApi.
 *
 * @returns {Array} Array of CmsWebData from the API response.
 *
 * Author: Muhammad Rooman
 * Date: 11 December, 2024
 */
const fetchWebinarData = async () => {
  try {
    const response = await WebinarApi();
    console.log("WebinarData:", response);
    return response;
  } catch (error) {
    console.error("Error fetching webinar data:", error);
    return { error: "An error occurred while fetching the webinar data." };
  }
};

export default async function Event() {
  const webinarData = await fetchWebinarData();
  const webinarEvenData = webinarData.events
  console.log("Webinar000000000",webinarEvenData);
    return (
      <>
        <EventBanner /> 
        <SpiritualEvents webinarEvenData={webinarEvenData} />
        <SignUpNow />
        <Testimonial />
      </>
    );
  }
  