import Link from "next/link";
import { useTranslations } from "next-intl";

export default function EventBanner(){
    const t = useTranslations("EventBanner");
    return(
        <>
        <section className="site-banner event-banner xl:min-h-[800px] min-h-[450px] relative flex items-center justify-start pb-10">
            <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5">
                <div className="inner-container relative">
                    <div className="site-banner-content max-w-[600px] rtl:max-w-[725px] ml-0">
                        <h1 className="xl:text-40 lg:text-[30px] text-[22px] text-info-color font-bold text-left rtl:xl:text-[70px] rtl:leading-[86px] rtl:text-right">{t("events")}</h1>
                        <h5 className="xl:text-50 lg:text-[40px] text-[30px] text-white font-bold text-left rtl:text-[80px] rtl: leading-[99px] rtl:text-right xl:leading-[63px] lg:leading-[46px] mb-5">{t("pathway_to_inner_peace")}</h5>
                        <p className="text-left text-white 2xl:text-2xl lg:text-xl rtl:text-right rtl:max-w-[582px] rtl:2xl:text-[40px] text-xl font-normal leading-[56px]">{t("through_holistic_practices")}</p>
                        <div className="btn-wrap mt-[60px]">
                        <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" target="_blank" className="py-2 lg:px-8 px-3 text-white rounded-3xl font-medium rtl:font-black xl:text-xl rtl:xl:text-[32px] text-[12px] bg-btn-gradient hover:bg-btn-gradient-hover lg:ml-4 rtl:text-[12px]">{t("download_app")}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}