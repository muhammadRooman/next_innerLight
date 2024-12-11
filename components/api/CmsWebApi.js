
/**
 * Fetches cmsWebApi data from the API.
 * 
 * Author: Muhammad Rooman
 * Date: 11 December, 2024
 */
export const CmsWebApi = async () => {
    try {
       const response = await fetch(`${process.env.NEXT_APP_BASE_API}/cmsWeb`, { 
         method: "GET",
         cache: "no-store", // cache option is now correctly placed
       });
       console.log("response cmsWebAPI ",response);
       const data = await response.json();
       return data; 
     } catch (error) {
       return { error: "An error occurred while fetching the cmsAPI" };
     }
   };
   