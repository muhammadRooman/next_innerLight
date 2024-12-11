import React from 'react';
import OurClients from "./OurClients";
import { testimonialAPI} from "./api/TestimonialApi";

 /**
 * Fetches testimonial data from the API.
 *
 * @returns {Array} Array of testimonials from the API response.
 * 
 * Author: Muhammad Rooman
 * Date: 11 December, 2024
 */
const TestimonialData = async () => {
    let response = await testimonialAPI();
    console.log("response",);
    return response.testimonials
  };

  
const Testimonial = async () => {
    const testimonialData = await TestimonialData();
    console.log("testimonial Daata ::" , testimonialData);
  return (
    <div>
      <OurClients testimonialData={testimonialData} />
    </div>
  )
}

export default Testimonial






// import React from 'react';
// import OurClients from "./OurClients";
// import { testimonialAPI} from "./api/TestimonialApi";

// const Testimonial = async () => {
//   const testimonialData = await testimonialAPI();
//   console.log("Testimonial Data::", testimonialData);

//   return (
//     <div>
//       <OurClients testimonialData={testimonialData} />
//     </div>
//   );
// };

// export default Testimonial;
