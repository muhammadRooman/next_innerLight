import React from 'react'
import WebInarDetailPage from "@/components/Event/WebInarDetailPage"
import Head from "@/app/[locale]/event/[detaiId]/head"; // Import DefaultTags component

const page = () => {
    return (
        <div>
          <Head/>
         <WebInarDetailPage/>
        </div>
      );
}

export default page
