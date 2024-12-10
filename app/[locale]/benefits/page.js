import BenefitsBanner from "@/components/Benefits/BenefitsBanner"; 
import BenefitsOfHolistic from "@/components/BenefitsOfHolistic"; 
import OurStories from "@/components/Benefits/OurStories";
import WeOffer from "@/components/Benefits/WeOffer";
import DownloadApp from "@/components/Benefits/DownloadApp";
import OurClients from "@/components/OurClients"; 





// app/aboutus/page.js
export default function Benefits() {
    return (
        <>
            <BenefitsBanner />
            <div className='lg:pt-20 pt-8 pb-0 bg-grey-light'>
              <BenefitsOfHolistic  />
            </div>
            <OurStories />
            <WeOffer /> 
            <DownloadApp />
            <OurClients /> 
        </>
    );
}
