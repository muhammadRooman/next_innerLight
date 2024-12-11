
/**
 * Fetches Webinar data from the API.
 * 
 * Author: Muhammad Rooman
 * Date: 11 December, 2024
 */
export const WebinarApi = async () => {
    console.log("env123",process.env.NEXT_PUBLIC_BASE_API_FRONT);
    try {
       const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_FRONT}/webinars/events`, { 
         method: "GET",
         cache: "no-store", // cache option is now correctly placed
       });
       console.log("responseWeninar ",response);
       const data = await response.json();
       return data; 
     } catch (error) {
       return { error: "An error occurred while fetching the webinarAPI" };
     }
   };