import React from "react";
import OurClients from "./OurClients";
import { testimonialAPI } from "./api/TestimonialApi";

/**
 * Fetches testimonial data from the TestimonialAPI.
 *
 * @returns {Array} Array of testimonials from the API response.
 *
 * Author: Muhammad Rooman
 * Date: 11 December, 2024
 */
const TestimonialData = async () => {
  let response = await testimonialAPI();
  return response.testimonials;
};

/**
 * Handles the testimonial component and passes the fetched data to the OurClients component.
 *
 * Author: Muhammad Rooman
 * Date: 11 December, 2024
 */
const Testimonial = async () => {
  const testimonialData = await TestimonialData();
  return (
    <div>
      <OurClients testimonialData={testimonialData} />
    </div>
  );
};

export default Testimonial;