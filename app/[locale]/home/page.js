import HeroBanner from "@/components/HeroBanner";
import Commitment from "@/components/Commitment";
// import Meditation from "@/components/Meditation";
import DownloadOurApp from "@/components/DownloadOurApp";
import BenefitsOfHolistic from "@/components/BenefitsOfHolistic";
import Blogs from "@/components/Blogs";
import Testimonial from "@/components/Testimonial";

export default function LandingPage() {
  return (
    <>
      <HeroBanner />
      <Commitment />
      {/* <Meditation className="arabic" />   */}
      <DownloadOurApp />
      <BenefitsOfHolistic />
      <Blogs />
      <Testimonial />
    </>
  );
}