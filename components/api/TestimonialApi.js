
export const testimonialAPI = async () => {
  console.log("API URL:", process.env.NEXT_APP_BASE_API);
  
  try {
    const response = await fetch(`${process.env.NEXT_APP_BASE_API}/testimonial`, { 
     
      method: "GET",
      cache: "no-store", // cache option is now correctly placed
    });
    const todo = await response.json();
    console.log("testimonial", todo);
    return todo; 
  } catch (error) {
    console.log("error", error);
    return [];
  }
};
