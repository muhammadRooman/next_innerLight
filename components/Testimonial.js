// import React from "react";
// import OurClients from "./OurClients";
// import { testimonialAPI } from "./api/TestimonialApi";

// const TestimonialData = async () => {
//   try {
//     const response = await testimonialAPI();
//     return response?.testimonials; 
//   } catch (error) {
//       return { error: "An error occurred while fetching the testimonials" };
//     }
// };

// const Testimonial = async () => {
//   const testimonialData = await TestimonialData();
//   return (
//     <div>
//       <OurClients testimonialData={testimonialData} />
//     </div>
//   );
// };

// export default Testimonial;