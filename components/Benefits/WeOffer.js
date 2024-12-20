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
                                <h5 class="text-info-color 2xl:text-2xl 2xl:leading-[69px] font-black rtl:2xl:text-[56px] rtl:text-right rtl:xl:text-[40px] rtl:text-[30px]">{t("we_offer")}</h5>
                                <h2 class="xl:text-[40px] lg:text-[30px] 2xl:leading-[88px] text-[25px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-right rtl:text-[40px]">{t("transformative")}</h2>
                            </div>
                            <p class="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal xl:mb-7 mb-5 rtl:flex rtl:items-start rtl:justify-start rtl:flex-col leading-[32px]">
                                <span className="text-info-color 2xl:text-2xl rtl:2xl:text-[40px] text-xl font-bold max-w-[727px] rtl:text-right mb-3">{t("main_holistic_healing1")} </span>{t("holistic_healing_1")}
                            </p>

                            <p class="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal xl:mb-7 mb-5 rtl:flex rtl:items-start rtl:justify-start rtl:flex-col leading-[32px]">
                                <span className="text-info-color 2xl:text-2xl rtl:2xl:text-[40px] text-xl font-bold max-w-[727px] rtl:text-right mb-3">{t("main_holistic_healing2")} </span>{t("holistic_healing_2")}
                            </p>

                            <p class="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal xl:mb-7 mb-5 rtl:flex rtl:items-start rtl:justify-start rtl:flex-col leading-[32px]">
                                <span className="text-info-color 2xl:text-2xl rtl:2xl:text-[40px] text-xl font-bold max-w-[727px] rtl:text-right mb-3">{t("main_holistic_healing3")} </span>{t("holistic_healing_3")}
                            </p>

                            <p class="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal xl:mb-7 mb-5 rtl:flex rtl:items-start rtl:justify-start rtl:flex-col leading-[32px]">
                                <span className="text-info-color 2xl:text-2xl rtl:2xl:text-[40px] text-xl font-bold max-w-[727px] rtl:text-right mb-3">{t("main_holistic_healing4")} </span>{t("holistic_healing_4")}
                            </p>
                        </div>

                        <div class="ml-auto w-full">
                            {/* <div className="yoga_image_wrap w-[566px] h-[715px]">
                                <img src="/yoga.png" alt="Yoga Image" class="rounded-lg shadow-md w-full" />
                            </div> */}
                            <div className='relative lg:w-full lg:min-h-[715px] min-h-[450px] w-full shadow-shadow-color bg-white p-2.5 ml-auto rounded-10 my-7'>
                                <Image src="/yoga.png" alt="logo white" layout="fill" className="rounded-30 object-cover p-2.5" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}