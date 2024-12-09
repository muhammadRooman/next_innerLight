import HeroBanner from "@/app/en/components/HeroBanner";  
import Commitment from "@/app/en/components/Commitment";  
import Meditation from "@/app/en/components/MeditationConsultation";  
import DownloadOurApp from "@/app/en/components/DownloadOurApp";
import BenefitsOfHolistic from "@/app/en/components/BenefitsOfHolistic"; 
import SubscriptionPlan from "@/app/en/components/SubscriptionPlan"; 
import Blogs from "@/app/en/components/Blogs"; 
import OurClients from "@/app/en/components/OurClients"; 


export default function LandingPage(){
    return(
        <>
            <HeroBanner  />  
            <Commitment /> 
            <Meditation /> 
            <DownloadOurApp />
            <BenefitsOfHolistic />
            {/* <SubscriptionPlan />  */}
            <Blogs />
            <OurClients /> 
        </>
    )
}