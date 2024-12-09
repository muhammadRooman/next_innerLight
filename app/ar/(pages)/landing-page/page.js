import HeroBanner from "@/app/ar/components/HeroBanner";  
import Commitment from "@/app/ar/components/Commitment";  
import Meditation from "@/app/ar/components/MeditationConsultation";  
import DownloadOurApp from "@/app/ar/components/DownloadOurApp";
import BenefitsOfHolistic from "@/app/ar/components/BenefitsOfHolistic"; 
import SubscriptionPlan from "@/app/ar/components/SubscriptionPlan"; 
import Blogs from "@/app/ar/components/Blogs"; 
import OurClients from "@/app/ar/components/OurClients"; 


export default function LandingPage(){
    return(
        <>
            <HeroBanner  />  
            <Commitment /> 
            <Meditation /> 
            <DownloadOurApp />
            <BenefitsOfHolistic />
            <SubscriptionPlan /> 
            <Blogs />
            <OurClients />
            
        </>
    )
}