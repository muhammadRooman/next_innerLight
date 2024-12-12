"use client"
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HeroBanner() {
  const t = useTranslations("HeroBanner");
  const [cmsHeaderData, setCmsHeaderData] = useState(null); // state to store data
  const [error, setError] = useState(null); // state to store error

  useEffect(() => {
    const fetchCmsData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/cmsWeb`);
        console.log("responsecmsWebAPI ", response.data.cmsWeb.header);
        setCmsHeaderData( response.data.cmsWeb.header); // set response data
      } catch (error) {
        setError("An error occurred while fetching the cmsAPI");
        console.error(error); // log error if it occurs
      }
    };

    fetchCmsData(); // call function to fetch data
  }, []);


  return (
    <section className="hero-banner bg-hero-banner bg-cover 2xl:min-h-[997px] min-h-[697px] relative flex items-end justify-center pb-10 lg:bg-center bg-center">
      <div className="2xl:container xl:container lg:container mx-auto px-5">
        <div className="inner-container relative">
          <div className="hero-banner-content max-w-[929px] mx-auto">
            <h5 className="xl:text-40 lg:text-[30px] text-[22px] text-white font-bold text-center">{cmsHeaderData?.heading_en} </h5>
            <div className="relative banner-img 2xl:min-h-[148px] sm:min-h-[120px] min-h-[60px] max-w-full">
              <Image src="/wellness.png"  alt={t("wellnessAlt")} layout="fill" className="max-w-full"  />
            </div>
            <p className="text-center text-white 2xl:text-2xl lg:text-xl">{cmsHeaderData?.description_en}</p>
          </div>
          <div className="social-icon">
            <nav className="flex items-center justify-center mt-6">
              <Link href="#" className="min-w-14 min-h-14 rounded-full border-solid border-2 flex items-center justify-center border-info-color ease-in-out me-2 hover:bg-info-color">
                <Image src="/facebook.png" width={25} height={25} alt={t("facebookAlt")} className=""  />
              </Link>
              <Link href="#" className="min-w-14 min-h-14 rounded-full border-solid border-2 flex items-center justify-center border-info-color ease-in-out me-2 hover:bg-info-color">
                <Image src="/twitter.png"  width={25} height={25} alt={t("twitterAlt")} className=""  />
              </Link>
              <Link href="#" className="min-w-14 min-h-14 rounded-full border-solid border-2 flex items-center justify-center border-info-color ease-in-out me-2 hover:bg-info-color">
                <Image src="/linkedin.png"  width={25} height={25} alt={t("linkedinAlt")} className="" />
              </Link>
              <Link  href="#" className="min-w-14 min-h-14 rounded-full border-solid border-2 flex items-center justify-center border-info-color ease-in-out me-2 hover:bg-info-color"  >
                <Image src="/playSolid.png" width={25} height={25} alt={t("playSolidAlt")} className="" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
