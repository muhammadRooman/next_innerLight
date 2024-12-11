import HeroBanner from "@/components/HeroBanner";
import Commitment from "@/components/Commitment";
// import Meditation from "@/components/Meditation";
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
  let response = await CmsWebApi();
  console.log("response123",response);
  return response;
};


const LandingPage = async () => {
  const cmsWebData = await CmsWebData();
  const  HeroBannerHeader =  cmsWebData?.cmsWeb?.header
  const  CommitmentHeader =  cmsWebData?.cmsWeb?.commitment
  const  cms =  cmsWebData?.cmsWeb?.commitment
  console.log("HeroBannerHeader",HeroBannerHeader);
  console.log("CommitmentHeader",cmsWebData);
  console.log("cms1212",cms);

  return (
    <>
      <HeroBanner HeroBannerHeader={HeroBannerHeader} />
      <Commitment  CommitmentHeader = {CommitmentHeader}/>
      {/* <Meditation className="arabic" />   */}
      <DownloadOurApp />
      <BenefitsOfHolistic />
      <Blogs />
      <Testimonial />
    </>
  );
}

export default LandingPage;