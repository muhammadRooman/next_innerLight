import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";



export default function WeOffer() {
    const t = useTranslations("WeOffer");
    return (
        <>
            <section>
                <div class="bg-white xl:pt-[130px] xl:pb-[126px] lg:pt-[90px] lg:pb-[90px] py-10">
                    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center  px-5">

                        <div>
                            <div class="heading-box text-left xl:mb-11 mb-6">
                                <h5 class="text-info-color 2xl:text-2xl font-black">{t("we_offer")}</h5>
                                <h2 class="xl:text-40 lg:text-[30px] text-[20px] font-bold">{t("transformative")}</h2>
                            </div>
                            <p class="text-lg xl:mb-7 mb-5">
                                <span className="text-info-color 2xl:text-2xl font-bold">{t("holistic_healing")} </span>{t("holistic_healing_1")}
                            </p>

                            <p class="text-lg xl:mb-7 mb-5">
                                <span className="text-info-color 2xl:text-2xl font-bold">{t("holistic_healing")} </span>{t("holistic_healing_2")}
                            </p>

                            <p class="text-lg xl:mb-7 mb-5">
                                <span className="text-info-color 2xl:text-2xl font-bold">{t("holistic_healing")} </span>{t("holistic_healing_3")}
                            </p>

                            <p class="text-lg xl:mb-7 mb-5">
                                <span className="text-info-color 2xl:text-2xl font-bold">{t("holistic_healing")} </span>{t("holistic_healing_4")}
                            </p>
                        </div>

                        <div class="ml-auto w-full">
                            {/* <div className="yoga_image_wrap w-[566px] h-[715px]">
                                <img src="/yoga.png" alt="Yoga Image" class="rounded-lg shadow-md w-full" />
                            </div> */}
                            <div className='relative lg:max-w-[566px] lg:min-h-[715px]  min-h-[450px] w-full  shadow-shadow-color bg-white p-2.5 ml-auto rounded-10 my-7'>
                                <Image src="/yoga.png" alt="logo white" layout="fill" className="rounded-30 object-cover p-2.5" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}