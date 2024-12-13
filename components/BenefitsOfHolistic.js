"use client";
import Image from 'next/image';
import { useTranslations } from "next-intl";
export default function BenefitsOfHolistic() {
    const t = useTranslations("SiteBanner");
    const benefits = [
        {
            id: 1,
            image: "/benefitsImg1.png",
            title: t("personalization"),
            description:t("para_1")
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
            title: t("accessibility"),
            description:t("para_3")
        },
        {
            id: 4,
            image: "/benefitsImg4.png",
            title: t("flexibility"),
            description: t("para_4")
        }
    ];

    return (
        <section className="benefits-holistic bg-gray-light lg:pt-0 pt-8   pb-[40px]">
            <div className="2xl:container xl:container lg:container mx-auto px-5">
                <div className="heading-box text-center xl:mb-20 mb-10">
                    <h5 className="text-info-color 2xl:text-2xl font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px]">{t("discoverThe")}</h5>
                    <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px]">{t("benefits_of_holistic")}</h2>
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
    );
}
