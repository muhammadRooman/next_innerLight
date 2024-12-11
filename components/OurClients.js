"use client";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required Swiper modules
import { Pagination, Navigation } from "swiper/modules";

export default function OurClients({ testimonialData }) {
  const t = useTranslations("OurClient");
  const currentPath = usePathname();
  const [language, setLanguage] = useState('');

/**
   * Determine the current language based on the path and set it to state.
   * Defaults to 'en' if no language is found in the path.
   * 
   * Author: Muhammad Rooman
   * Date: 11 December, 2024
   */
  useEffect(() => {
     const lang = currentPath.split('/')[1] || 'en';  // Default to 'en' if language is missing
    setLanguage(lang);
  }, [currentPath]);

  return (
    <section className="bg-SubscriptionPlan-bg lg:pt-10 lg:pb-17 py-10 bg-cover bg-center">
      <div className="2xl:container xl:container lg:container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h5 className="text-info-color 2xl:text-2xl font-black">{t("reviews")}</h5>
          <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold">{t("what_our_clients_say_about_us")}</h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          pagination={{
            el: ".custom-pagination",
            type: "custom",
            renderCustom: (swiper, current, total) => {
              return `<span className="text-lg text-[#343434]">0${current}</span> / <span className="text-lg text-[#343434]">0${total}</span>`;
            },
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Pagination, Navigation]}
          className="SwiperSlder relative"
        >
          {testimonialData?.map((client, index) => (
            <SwiperSlide key={client._id}>
              <div className="xl:grid xl:grid-cols-12 gap-6 items-center">
                <div className="col-span-5">
                  <div className="relative xl:min-h-[350px] min-h-[250px] xl:mb-0 mb-9">
                    <Image
                       src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${client?.image}`}
                       alt={language === "en" ? client?.name_en : client?.name_ar }
                      layout="fill"
                      className="object-cover mx-auto xl:max-w-[390px] max-w-[280px]"
                    />
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="slider-content xl:max-w-[640px] max-w-full xl:text-left text-center">
                    <div className="mb-5">
                      <h4 className="text-2xl font-medium">{language === "en" ? client?.name_en : client?.name_ar }</h4>
                      <small className="text-info-color text-lg">
                      {language === "en" ? client?.country_en : client?.country_ar } , {language === "en" ? client?.age_en : client?.age_ar } {t("years_old")}
                      </small>
                    </div>
                    <p className="text-lg">{language === "en" ? client?.review_en : client?.review_ar }</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Pagination and Navigation */}
          <div className="flex justify-center items-center xl:mt-0 mt-6">
            <button
              className="custom-prev custom-prev-btn absolute top-[44%] translate-y-[-44%] left-0 z-20"
              aria-label="Previous"
            >
              <Image src="/left.svg" alt="left" width={40} height={39} />
            </button>
            <div className="center-nav flex">
              <button className="custom-prev" aria-label="Previous">
                <Image src="/left.png" alt="left" width={16} height={8} />
              </button>
              <div className="custom-pagination text-center"></div>
              <button className="custom-next custom-next-btn" aria-label="Next">
                <Image src="/right.png" alt="right" width={16} height={8} />
              </button>
            </div>
            <button
              className="custom-next custom-next-btn absolute right-0 z-20 top-[44%] translate-y-[-44%]"
              aria-label="Next"
            >
              <Image src="/right.svg" alt="right" width={40} height={39} />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
