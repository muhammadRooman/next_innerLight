import BenefitsBanner from "@/app/en/components/Benefits/BenefitsBanner"; 
import BenefitsOfHolistic from "@/app/en/components/BenefitsOfHolistic"; 
import OurStories from "@/app/en/components/Benefits/OurStories";
import WeOffer from "@/app/en/components/Benefits/WeOffer";
import DownloadApp from "@/app/en/components/Benefits/DownloadApp";
import OurClients from "@/app/en/components/OurClients"; 





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
