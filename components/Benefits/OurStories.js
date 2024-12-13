import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function OurStories() {
    const t = useTranslations("OurStories");
    return (
        <>
            <section className="our-stories bg-SubscriptionPlan-bg bg-cover  pb-20">
                <div className="2xl:container xl:container lg:container mx-auto px-5">

                    <div className='book-you-button md:flex md:justify-between items-center mt-8 justify-center text-center pt-16 pb-7'>
                        <div className="heading-box text-left">
                            <h5 className="text-info-color 2xl:text-2xl font-black rtl:text-right rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px]">{t("our_stories")}</h5>
                            <h2 className="xl:text-40 lg:text-[30px] text-[25px] rtl:text-right font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px]">{t("real_stories")}</h2>
                        </div>
                        <Link href="#" className="pt-[10px] pb-[10px] pl-[52px] pr-[52px] text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover lg:mr-20 lg:text-lg block">{t("see_all")}</Link>
                    </div>

                    <div className="w-full lg:w-full lg:pt-[60px] lg:pb-[60px] lg:pl-[60px] lg:pr-[60px] 2xl:pl-[112px] 2xl:pr-[112px] 2xl:pt-[84px] 2xl:pb-[84px] bg-white rounded-lg  space-y-8 pt-10 sm:pt-[50px] md:pt-[60px] pb-10 sm:pb-[50px] md:pb-[60px] px-5 sm:px-[40px] md:px-[60px]">
                        <div className="flex md:flex-row items-start md:items-center xl:justify-between justify-end border-solid border-b-2 border-[#B8E7FF] pb-6 flex-wrap">
                            <div className="md:flex">
                                <h3 className="text-[24px] font-bold text-[#1796D8] md:max-w-[220px]">{t("journey")}</h3>
                                <div className="singnature-text md:pl-6">
                                    <p className="mt-2 text-[#343434] text-[18px] leading-7 md:max-w-[750px]">
                                       {t("journey_details")}
                                    </p>
                                    <p className="text-[#1796D8] text-[24px] font-handwriting mt-4 font-brittany">{t("sophia")}</p>
                                </div>

                            </div>
                            <div className="mt-4 md:mt-0 pr-8">
                                <button className="bg-bgBlue rounded-full p-3 h-16 w-16 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4l15 8-15 8V4z" /></svg>
                                </button>
                            </div>
                        </div>


                        <div className="flex md:flex-row items-start md:items-center xl:justify-between justify-end border-solid border-b-2 border-[#B8E7FF] pb-6 flex-wrap">
                            <div className="md:flex">
                                <h3 className="text-[24px] font-bold text-[#1796D8] md:max-w-[220px] content-center">{t("reconnecting")}</h3>
                                <div className="singnature-text md:pl-6">
                                    <p className="mt-2 text-[#343434] text-[18px] leading-7 max-w-[750px]">
{t("reconnecting_details")}
                                    </p>
                                    <p className="text-[#1796D8] text-[24px] font-handwriting mt-4 font-brittany">{t("micheal")}</p>
                                </div>

                            </div>
                            <div className="mt-4 md:mt-0 pr-8">
                                <button className="bg-bgBlue rounded-full p-3 h-16 w-16 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4l15 8-15 8V4z" /></svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex md:flex-row items-start md:items-center xl:justify-between justify-end flex-wrap">
                            <div className="md:flex">
                                <h3 className="text-[24px] font-bold text-[#1796D8] md:max-w-[220px] content-center">{t("healing")}</h3>
                                <div className="singnature-text md:pl-6">
                                    <p className="mt-2 text-[#343434] text-[18px] leading-7 max-w-[750px]">
                                       {t("healing_details")}
                                    </p>
                                    <p className="text-[#1796D8] text-[24px] font-handwriting mt-4 font-brittany">{t("sophia")}</p>
                                </div>

                            </div>
                            <div className="mt-4 md:mt-0 pr-8">
                                <button className="bg-bgBlue rounded-full p-3 h-16 w-16 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4l15 8-15 8V4z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}