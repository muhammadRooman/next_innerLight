import HeroBanner from "@/components/HeroBanner";
import Commitment from "@/components/Commitment";
// import Meditation from "@/components/Meditation";
import DownloadOurApp from "@/components/DownloadOurApp";
import BenefitsOfHolistic from "@/components/BenefitsOfHolistic";
import SubscriptionPlan from "@/components/SubscriptionPlan";
import Blogs from "@/components/Blogs";
import OurClients from "@/components/OurClients";

export default function LandingPage() {
  return (
    <>
      <HeroBanner />
      <Commitment />
      {/* <Meditation className="arabic" />   */}
      <DownloadOurApp />
      <BenefitsOfHolistic />
      <SubscriptionPlan />
      <Blogs />
      <OurClients />
    </>
  );
}