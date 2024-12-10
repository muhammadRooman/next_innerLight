import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function WhatWeOffer() {
  const t = useTranslations("AboutBanner");

  // Data for the cards
  const offerings = [
    {
      title: t("spiritual_resources"),
      image: "/assets/images/about/SpiritualResources.png",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    },
    {
      title: t("personalized_guidance"),
      image: "/assets/images/about/PersonalizedGuidance.png",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    },
    {
      title: t("online_courses_and_workshops"),
      image: "/assets/images/about/OnlineCourses.png",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    },
  ];

  return (
    <section className="WhatWeOffer xl:pt-[107px] pb-12 pt-[50px] bg-SubscriptionPlan-bg bg-cover">
      <div className="2xl:container xl:container lg:container mx-auto lg:max-0 px-5">
        <div className="heading-box text-center lg:mb-20 mb-10 max-w-[1087px] ms-auto me-auto">
          <h5 className="text-info-color 2xl:text-2xl font-black">{t("innelight")}</h5>
          <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold mb-4">{t("what_we_offer")}</h2>
          <p className="2xl:text-2xl text-xl font-normal">{t("experience_personalized")}</p>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7 lg:mt-28 min-h-[430px]">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="WhatWeOffer-card group shadow-shadow-color bg-white rounded-md relative transition-all duration-300 h-[max-content]"
            >
              <div className="WhatWeOffer-img shadow-shadow-color">
                <Image
                  src={offering.image}
                  className="rounded-[10px]"
                  fill
                  alt={offering.title}
                />
              </div>
              <div className="WhatWeOffer-content lg:p-6 p-5">
                <h5 className="text-info-color 2xl:text-2xl font-bold text-left">{offering.title}</h5>
                <div className="hide-content max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out group-hover:max-h-40">
                  <p className="text-lg mt-3">{offering.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
