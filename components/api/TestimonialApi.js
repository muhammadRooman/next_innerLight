
/**
 * Fetches testimonial data from the API.
 * 
 * Author: Muhammad Rooman
 * Date: 11 December, 2024
 */
export const testimonialAPI = async () => {
 try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/testimonial`, { 
      method: "GET",
      cache: "no-store", // cache option is now correctly placed
    });
    const data = await response.json();
    return data; 
  } catch (error) {
    return { error: "An error occurred while fetching the testimonials" };
  }
};
