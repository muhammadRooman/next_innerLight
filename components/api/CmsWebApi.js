export const CmsWebApi = async () => {
    try {
       const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cmsWeb`, { 
         method: "GET",
         cache: "no-store", // cache option is now correctly placed
       });
       const data = await response.json();
       return data; 
     } catch (error) {
       return { error: "An error occurred while fetching the cmsAPI" };
     }
   };
   