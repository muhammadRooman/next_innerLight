"use client"
import SiteBanner from "@/components/SiteBanner";
import Commitment from "@/components/Commitment";
// import Meditation from "@/components/Meditation";
import DownloadOurApp from "@/components/DownloadOurApp";
import { usePathname } from 'next/navigation';
import BenefitsOfHolistic from "@/components/BenefitsOfHolistic";
import Blogs from "@/components/Blogs";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Testimonial from "@/components/Testimonial";
import { useEffect, useState } from "react";
import Link from "next/link";
import SubscribeUs from "@/components/SubscribeUs";
import UpcomingWorkshop from "@/components/UpcomingWorkshop";
import BlogsCard from "@/components/BlogsCard";
import axios from "axios";
import useSWR from 'swr';

// Define fetcher function
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function LandingPage() {
  const currentPath = usePathname();
  const [language, setLanguage] = useState('')
  const t = useTranslations("SiteBanner");
  const [cmsWebHeadingData,setCmsWebHeadingData] = useState("")
  const [cmsWebCommitmentData,setCmsWebHCommitmentData] = useState("")
  const [CmsWebHMeditationData,setCmsWebHMeditationData] = useState("")
  
  // Fetch cmsWeb data using SWR
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_API}/cmsWeb`,
    fetcher
  );
  
  // Log the fetched data
  useEffect(() => {
    if (data) {
      setCmsWebHeadingData(data.cmsWeb.header)
      setCmsWebHCommitmentData(data.cmsWeb.commitment)
      setCmsWebHMeditationData(data.cmsWeb.meditation)
      console.log('Data from server:', data);
    }

    const lang = currentPath.split('/')[1] || 'en';  // Default to 'en' if language is missing
    setLanguage(lang);

  }, [data,currentPath]);

  useEffect(() => {
    console.log('cmsWebHeadingData', cmsWebHeadingData);
    console.log('cmsWebCommitmentData123', cmsWebCommitmentData);
    console.log('CmsWebHMeditationData00', CmsWebHMeditationData);
  }, [cmsWebHeadingData, cmsWebCommitmentData,CmsWebHMeditationData])

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // ${process.env.NEXT_PUBLIC_BASE_API_FRONT}/webinars/events

 
  const benefits = [
    {
        id: 1,
        image: "/benefitsImg1.png",
        title: t("personalization"),
        description: t("para_1")
    },
    {
        id: 2,
        image: "/benefitsImg2.png",
        title: t("community"),
        description: t("para_2")
    },
    {
        id: 3,
        image: "/benefitsImg3.png",
        title: t("community"),
        description: t("para_3")
    },
    {
        id: 4,
        image: "/benefitsImg4.png",
        title: t("flexibility"),
        description: t("para_4")
    }
  ];
  
  return (
    <>
      {/* Hero Banner Section */}
      <section className="site-banner bg-site-banner bg-cover 2xl:min-h-[997px] min-h-[697px] relative flex items-end justify-center pb-10 lg:bg-center bg-center">
        <div className="2xl:container xl:container lg:container mx-auto px-5">
          <div className="inner-container relative">
            <div className="site-banner-content max-w-[929px] mx-auto">
              <h5 className="xl:text-40 lg:text-[30px] text-[22px] text-white font-bold text-center">{language === "en" ? cmsWebHeadingData?.heading_en: cmsWebHeadingData?.heading_ar} </h5>
              <div className="relative banner-img 2xl:min-h-[148px] sm:min-h-[120px] min-h-[60px] max-w-full">
                <Image src="/wellness.png" alt={t("wellnessAlt")} layout="fill" className="max-w-full" />
              </div>
              <p className="text-center text-white 2xl:text-2xl lg:text-xl">{language === "en" ? cmsWebHeadingData?.description_en: cmsWebHeadingData?.description_ar}</p>
            </div>
            <div className="social-icon">
              <nav className="flex items-center justify-center mt-6">
              {cmsWebHeadingData?.facebook && (
                <Link href={cmsWebHeadingData.facebook} className="min-w-14 min-h-14 rounded-full border-solid border-2 flex items-center justify-center border-info-color ease-in-out me-2 hover:bg-info-color">
                  <Image src="/facebook.png" width={25} height={25} alt={t("facebookAlt")} className="" />
                </Link>
                )}
                {cmsWebHeadingData?.twitter && (
                <Link href={cmsWebHeadingData.twitter} className="min-w-14 min-h-14 rounded-full border-solid border-2 flex items-center justify-center border-info-color ease-in-out me-2 hover:bg-info-color">
                  <Image src="/twitter.png" width={25} height={25} alt={t("twitterAlt")} className="" />
                </Link>
                )}
                {cmsWebHeadingData?.linkedin && (
                <Link href={cmsWebHeadingData.linkedin} className="min-w-14 min-h-14 rounded-full border-solid border-2 flex items-center justify-center border-info-color ease-in-out me-2 hover:bg-info-color">
                  <Image src="/linkedin.png" width={25} height={25} alt={t("linkedinAlt")} className="" />
                </Link>
                )}
                {cmsWebHeadingData?.youtube && (
                <Link href={cmsWebHeadingData.youtube} className="min-w-14 min-h-14 rounded-full border-solid border-2 flex items-center justify-center border-info-color ease-in-out me-2 hover:bg-info-color">
                  <Image src="/playSolid.png" width={25} height={25} alt={t("playSolidAlt")} className="" />
                </Link>
                )}
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment-wrap bg-gray-light lg:pt-[102px] xl:pb-[110px] lg:pb-[80px] pt-[60px] pb-[60px]">
        <div className="2xl:container xl:container lg:container mx-auto px-5">
          <div className='heading-box text-center lg:mb-16 mb-7'>
            <h5 className='text-info-color 2xl:text-2xl font-black  '>{t("innerLight")}</h5>
            <h2 className='xl:text-40 lg:text-[30px] text-[25px]  font-bold'>{language === "en" ? cmsWebCommitmentData?.heading_en: cmsWebCommitmentData?.heading_ar}</h2>
          </div>
          <div className="lg:grid lg:grid-cols-4 items-center">
            <div className='col-span-1'>
              <div className='commitment-content text-center lg:mb-36 mb-4 lg:max-w-[395px] max-w-full'>
                <p className='xl:text-lg font-normal'>{language === "en" ? cmsWebCommitmentData?.point1_en: cmsWebCommitmentData?.point1_ar}</p>
              </div>
              <div className='commitment-content text-center lg:mb-36 mb-4 lg:max-w-[395px] max-w-full'>
                <p className='xl:text-lg font-normal'>{language === "en" ? cmsWebCommitmentData?.point2_en: cmsWebCommitmentData?.point2_ar}</p>
              </div>
              <div className='commitment-content text-center lg:max-w-[395px] max-w-full mb-4'>
                <p className='xl:text-lg font-normal'>{language === "en" ? cmsWebCommitmentData?.point3_en: cmsWebCommitmentData?.point3_ar}</p>
              </div>
            </div>
            <div className='col-span-2'>
              <div className='relative xl:max-w-[566px] lg:max-w-[440px] max-w-full lg:min-h-[715px] min-h-[450px] shadow-shadow-color bg-white p-2.5 mx-auto rounded-10 my-7'>
                <Image src="/CommitmentImg.png" alt="logo white" layout="fill" className="rounded-30 object-cover p-2.5" />
              </div>
            </div>
            <div className='col-span-1'>
              <div className='commitment-content text-center lg:mb-36 lg:max-w-[395px] max-w-full mb-4'>
                <p className='xl:text-lg font-normal'>{language === "en" ? cmsWebCommitmentData?.point4_en: cmsWebCommitmentData?.point4_ar}</p>
              </div>
              <div className='commitment-content text-center lg:mb-36 lg:max-w-[395px] max-w-full mb-4'>
                <p className='xl:text-lg font-normal'>{language === "en" ? cmsWebCommitmentData?.point5_en: cmsWebCommitmentData?.point5_ar}</p>
              </div>
              <div className='commitment-content text-center lg:max-w-[395px] max-w-full mb-4'>
                <p className='xl:text-lg font-normal'>{language === "en" ? cmsWebCommitmentData?.point6_en: cmsWebCommitmentData?.point6_ar}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="MeditationConsultation-wrap "> 
               <div className='MeditationConsultation-innner flex lg:min-h-[997px]  min-h-[860px]'>
                    <div className='Meditation-left-img bg-meditation-left w-full bg-cover lg:max-w-[calc(100%-70%)] max-w-full min-h-full lg:block hidden'></div>
                    <div className='Meditation-content bg-meditation-bg w-full bg-cover pt-12 lg:pl-16 rtl:lg:pr-16  2xl:pr-[200px] rtl:2xl:pl-[200px] xl:pr-[140px] rtl:xl:pl-[140px] lg:pr-[45px] rtl:lg:pl-[45px] rtl:px-4 lg:max-w-[calc(100%-30%)] max-w-full min-h-full'>
                      <div className='Meditation-content-inner  pb-8'>
                      <div className='max-w-[887px]'>
                      <div className='heading-box xl:mb-9 mb-4'>
                            <h5 className='text-info-color 2xl:text-2xl font-black'>{t("innerLight")}</h5>
                            <h2 className='xl:text-40 lg:text-[30px]  text-[25px] font-bold'>{language === "en" ? CmsWebHMeditationData?.heading_en: CmsWebHMeditationData?.heading_ar}</h2>
                        </div>
                        <p className='text-lg xl:text-2xl font-normal mb-4'>{language === "en" ? CmsWebHMeditationData?.description_en: CmsWebHMeditationData?.description_ar}</p>
                        <p className='text-lg xl:text-2xl font-bold text-[#753892]'>{t("connect_with_compassionate")}</p>
                      </div>
                          <div className='static-img relative lg:left-[-166px] rtl:lg:right-[-166px] mt-8 lg:w-[calc(100%+166px)] w-full '>
                            <div class="md:grid md:grid-cols-3 items-center">
                                <div className='col-span-1  '> 
                                    <div className='static-img-wrap relative  min-h-[380px] rounded-10 overflow-hidden'>
                                       <Image src="/MmeditationImg1.png" alt="logo white" layout="fill"  className="rounded-30 object-cover p-2.5" />
                                    </div>
                                </div> 
                                <div className='col-span-1  '> 
                                    <div className='static-img-wrap relative  min-h-[380px] rounded-10 overflow-hidden'>
                                       <Image src="/MmeditationImg2.png" alt="logo white" layout="fill"  className="rounded-30 object-cover p-2.5" />
                                    </div>
                                </div>
                                <div className=' col-span-1  '> 
                                    <div className='static-img-wrap relative  min-h-[380px] rounded-10 overflow-hidden'>
                                       <Image src="/MmeditationImg3.png" alt="logo white" layout="fill"  className="rounded-30 object-cover p-2.5" />
                                    </div>
                                </div> 
                            </div>
                        </div>  
                        <div className='book-you-button sm:flex sm:justify-between items-center mt-8 justify-center text-center  '>
                           <h5 className='text-black xl:text-40 lg:text-[30px]  text-[25px]  font-bold mb-3'>{t("book_your_consultation")}</h5> 
                           <Link href="#" className="py-2 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover xl:mr-0 lg:w-[181px]   lg:text-lg block">{t("contact_us")}</Link>
                        </div>
                      </div>
                    </div>
                </div>       
            </section>
            <section className="DownloadOurApp bg-gray-light lg:pt-9 lg:pb-10 py-8 ">
        <div className="2xl:container xl:container lg:container mx-auto px-5"> 
          <div class="xl:grid xl:grid-cols-2 flex flex-col-reverse"> 
            <div className='DownloadOurApp-content xl:max-w-[685px] max-w-full lg:pt-20 pt-8 '> 
              <div className='heading-box text-left mb-3.5'>
                <h5 className='text-info-color 2xl:text-2xl font-black '>{t('headingSmall')}</h5>
                <h2 className='xl:text-40 lg:text-[30px] text-[25px] font-bold'>{t('downloadOurApp')}</h2>
              </div>
              <p className='text-lg xl:text-2xl font-bold text-[#753892]  mb-7'>{t('connectWithExperts')}</p>
              <p className='text-lg xl:text-2xl '>{t('personalizedSupport')}</p>
              <div className='QR-box mt-9 flex justify-between items-center max-w-[420px]'>
                <div className='btn-download'>
                  <Link href="#" className=""><Image src="/AppStore.png" width={180} height={55} alt="AppStore" className=''/></Link> 
                  <Link href="#" className="mt-9 block"><Image src="/GooglePlay.png" width={180} height={55} alt="AppStore" className=''/></Link> 
                </div>
                <div className='QR'>
                  <Image src="/QR-Code.png" width={128} height={128} alt="AppStore" className=''/>
                </div>
              </div>
            </div> 
            <div className='DownloadOurApp-img  '> 
              <div className='relative xl:min-h-[700px] min-h-[400px]' >
                <Image src="/DownloadOurApp.png" alt="logo white" layout="fill" className="rounded-30 lg:object-contain object-contain p-2.5 xl:w-[400px]" />
              </div> 
            </div> 
          </div> 
        </div> 
      </section>
      <section className="benefits-holistic bg-gray-light lg:pt-0 pt-8   pb-[40px]">
            <div className="2xl:container xl:container lg:container mx-auto px-5">
                <div className="heading-box text-center xl:mb-20 mb-10">
                    <h5 className="text-info-color 2xl:text-2xl font-black">{t("discoverThe")}</h5>
                    <h2 className="xl:text-40 lg:text-[30px]  text-[25px]  font-bold">{t("benefits_of_holistic")}</h2>
                </div>
                <div className="lg:grid xl:grid-cols-4 lg:grid-cols-2 gap-7">
                    {benefits.map(benefit => (
                        <div key={benefit.id} className="benefits-card-wrap xl:mb-3 mb-6">
                            <div className="benefits-card text-center">
                                <div className="relative min-h-[280px]">
                                    <Image
                                        src={benefit.image}
                                        alt={benefit.title}
                                        layout="fill"
                                        className="object-cover rounded-10"
                                    />
                                </div>
                                <div className="benefits-content xl:max-w-[307px] mx-auto">
                                    <h5 className="2xl:text-2xl text-xl  font-bold text-info-color lg:py-5 py-3">{benefit.title}</h5>
                                    <p className="text-lg">{benefit.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/* blog */}
        <section className='blog-wrap bg-gray-light'>
        <div className="2xl:container xl:container lg:container px-5 mx-auto lg:py-12 py-7">
          <div className="heading-box lg:text-left text-center mb-9    ">
            <h5 className="text-info-color 2xl:text-2xl font-black">{t("deepen_your_practice")}</h5>
            <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold  ">{t("blogs_and_upcoming_workshops")}</h2> 
          </div>
          <div class="xl:grid xl:grid-cols-12 gap-6">
            <div className='col-span-8'> 
                 <div className='blog-card shadow-shadow-color rounded-10 xl:mb-0 mb-6'> 
                    <div className='card-img relative xl:min-h-[521px] lg:min-h-[421px] min-h-[300px]'>
                        <Image src="/BlogCard1.png" alt="BlogCard1 white" layout="fill"  className="rounded-10 object-cover  " />
                    </div> 
                    <div className='card-content lg:p-7 p-5 lg:pb-10 pb-7 '>
                        <h4 className='2xl:text-2xl text-xl font-bold max-w-[605px] mb-4'>{t("the_mind_body_connection_how_mental_health")}</h4>
                        <p className='lg:text-lg text-sm'>{t("discuss_how_emotional_and_psychological")}</p>
                    </div>
                 </div> 
            </div>
            <div className='col-span-4  '> 
                <SubscribeUs />
                <UpcomingWorkshop   />
            </div>
          </div>
           <BlogsCard />
        </div>
     </section>
     {/* <Testimonial /> */}
      
      {/* Additional Sections */}
      {/* ...Other sections like DownloadOurApp, BenefitsOfHolistic, etc. */}
    </>
  );
}
