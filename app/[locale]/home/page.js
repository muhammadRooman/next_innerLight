import HeroBanner from "@/components/HeroBanner";
import Commitment from "@/components/Commitment";
import Meditation from "@/components/MeditationConsultation";
import DownloadOurApp from "@/components/DownloadOurApp";
import BenefitsOfHolistic from "@/components/BenefitsOfHolistic";
import Blogs from "@/components/Blogs";
import Testimonial from "@/components/Testimonial";
import { CmsWebApi } from "../../../components/api/CmsWebAPI";

/**
 * Fetches CmsWebData data from the CmsWebApi.
 *
 * @returns {Array} Array of CmsWebData from the API response.
 *
 * Author: Muhammad Rooman
 * Date: 11 December, 2024
 */
const CmsWebData = async () => {
  try {
    const response = await CmsWebApi();
    console.log("response1111",response);
    return response.cmsWeb; 
  } catch (error) {
      return { error: "An error occurred while fetching the CmsWeb" };
    }
};


const  LandingPage = async ()=> {
  const cmsWebData = await CmsWebData();
  const  HeroBannerHeader =  cmsWebData?.header
  const  CommitmentHeader =  cmsWebData?.commitment
  const  cms =  cmsWebData
  console.log("HeroBannerHeader",HeroBannerHeader);
  console.log("CommitmentHeader",cmsWebData);
  console.log("cms1212",cms);

  return (
    <>
      <HeroBanner HeroBannerHeader={HeroBannerHeader} />
      <Commitment CommitmentHeader = {CommitmentHeader}/>
      <Meditation />  
      <DownloadOurApp />
      <BenefitsOfHolistic />
      <Blogs />
      <Testimonial />
    </>
  );
}
export default LandingPage