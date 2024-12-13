"use client";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function SpiritualCard({webinarEvenData}) {
  const t = useTranslations("SpiritualCard");
  const currentPath = usePathname();
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const lang = currentPath.split('/')[1] || 'en';  
   setLanguage(lang);
 }, [currentPath]);
 
  return (
    <>
      <section className="bg-[#EFEFEF] relative flex items-center justify-start lg:pt-4 lg:pb-14 ">
        <div className="2xl:container xl:container lg:container mx-auto lg:max-0  ">
          {webinarEvenData?.map((event, index) => (
            <div
              key={index}
              className="blog-wrap flex flex-wrap gap-5 pt-10 pb-10 border-b-2 border-[#D0D0D0] last:border-0 first:pt-0"  >
              {/* Date Card */}
              <div className="date-wrap w-[161px] h-[188px] bg-white rounded-10 flex justify-center items-center shadow-shadow-color3 xl:flex hidden">
                <h1 className="xl:text-40 lg:text-[30px] text-[25px] font-bold leading-[46px] text-center text-[#0C0101]">
                {new Date(event.date).getDate()}{" "}
                 <span className="block"> {new Date(event.date).toLocaleString("en-US", { month: "short" }).toUpperCase()}</span>
                </h1>
              </div>
              {/* Image Card */}
              <div
                className={`bg-center blog-image lg:w-[375px] lg:h-[400px] h-[280px] w-full flex justify-center items-end rounded-10 overflow-hidden p-5 ${event.image} bg-cover relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-[#FFFFFF00] before:via-[#00000019] before:to-[#000000C6] before:opacity-100 before:content-['']`}
              >
                 <Image
                       src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${event?.bannerPic}`}
                       alt={language === "en" ? event?.name : event?.name_ar }
                      layout="fill"
                      className="object-cover mx-auto xl:max-w-[390px] max-w-[280px]"
                    />
                {/* <h1 className="text-white relative z-10 2xl:text-2xl font-bold text-center">
                  {event.title}
                </h1> */}
                <div className="date-wrap w-[70px] h-[70px] bg-white rounded-10 flex justify-center items-center shadow-shadow-color3 xl:hidden lg:flex absolute top-3 left-3">
                <h1 className="xl:text-40 lg:text-[20px] text-[18px] font-bold lg:leading-[25px] leading-6  text-center text-[#0C0101]">
                  {event.date.split(" ")[0]}
                  <span className="block">{event.date.split(" ")[1]}</span>
                </h1>
              </div>
              </div>
              {/* Content Card */}
              <div className="blog-card-content flex-1 xl:max-w-[calc(100%-541px)] lg:max-w-[calc(100%-400px)]  max-w-[100%] shadow-color bg-white rounded-10  py-8 xl:px-12 p-6">
                <h4 className="xl:text-32  text-[24px]  font-bold">{language === "en" ? event?.name : event?.name_ar }</h4>
                <div className="shap bg-shap-bg max-w-[262.97px] bg-no-repeat  min-h-[42px] text-center flex items-center justify-start xl:my-7 my-5">
                  <p className="mt-0 text-white md:text-lg  px-2">{event.type}</p>
                </div>
                <p className="text-lg">{language === "en" ? event?.shortDescription : event?.shortDescription_ar }</p>
                <div className="btn-wrap mt-10">
                  <a  className="py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover lg:mr-8 lg:text-lg"  href="#">
                    {t("enrollnow")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
