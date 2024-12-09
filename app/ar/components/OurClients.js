"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required Swiper modules
import { Pagination, Navigation } from "swiper/modules";

// Client Data Array
const clients = [
  {
    name: "مايك جونسون",
    country: "USA",
    age: 24,
    image: "/client.png",
    review:
      "استمتع بالدعم الشخصي في رحلتك الروحية من خلال جلسات التأمل المخصصة والمشاورات الفردية مع الممارسين المهرة. سواء كنت جديدًا في مجال التأمل أو تتطلع إلى تعميق ممارستك، فإن استشاراتنا توفر التوجيه والوضوح والأدوات لمساعدتك في التغلب على التحديات وإيجاد السلام الداخلي. تواصل مع الخبراء المتعاطفين الذين يكرسون جهودهم لرعاية نموك ورفاهيتك.",
  },
  {
    name: "سارة ويلسون",
    country: "UK",
    age: 28,
    image: "/client.png",
    review:
      "استمتع بالدعم الشخصي في رحلتك الروحية من خلال جلسات التأمل المخصصة والمشاورات الفردية مع الممارسين المهرة. سواء كنت جديدًا في مجال التأمل أو تتطلع إلى تعميق ممارستك، فإن استشاراتنا توفر التوجيه والوضوح والأدوات لمساعدتك في التغلب على التحديات وإيجاد السلام الداخلي. تواصل مع الخبراء المتعاطفين الذين يكرسون جهودهم لرعاية نموك ورفاهيتك.",
  },
  {
    name: "جون دو",
    country: "Canada",
    age: 30,
    image: "/client.png",
    review:
      "استمتع بالدعم الشخصي في رحلتك الروحية من خلال جلسات التأمل المخصصة والمشاورات الفردية مع الممارسين المهرة. سواء كنت جديدًا في مجال التأمل أو تتطلع إلى تعميق ممارستك، فإن استشاراتنا توفر التوجيه والوضوح والأدوات لمساعدتك في التغلب على التحديات وإيجاد السلام الداخلي. تواصل مع الخبراء المتعاطفين الذين يكرسون جهودهم لرعاية نموك ورفاهيتك.",
  },
];

export default function OurClients() {
  return (
    <section className="bg-gray-light lg:pt-9 lg:pb-17 p5-10 direction">
      <div className="2xl:container xl:container lg:container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h5 className="text-info-color 2xl:text-2xl  font-black">التعليقات</h5>
          <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold">ماذا يقول عملاؤنا عنا؟</h2>
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
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="xl:grid xl:grid-cols-12 gap-6 items-center">
                <div className="col-span-5">
                  <div className="relative xl:min-h-[350px] min-h-[250px] xl:mb-0 mb-9">
                    <Image
                      src={client.image}
                      alt={client.name}
                      layout="fill"
                      className="object-cover mx-auto xl:max-w-[390px] max-w-[280px] "
                    />
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="slider-content xl:max-w-[640px] max-w-full xl:text-left text-center">
                    <div className="mb-5 text-right">
                      <h4 className="text-2xl font-medium text-right">{client.name}</h4>
                      <small className="text-info-color text-lg text-right">
                        {client.country}, {client.age} Years Old
                      </small>
                    </div>
                    <p className="text-lg text-right">{client.review}</p>
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
