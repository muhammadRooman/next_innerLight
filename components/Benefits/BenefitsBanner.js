import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function BenefitsBanner() {
    const t = useTranslations("BenifitsBanner");
    return (
        <>
           <section className="site-banner benefits-banner relative bg-cover xl:min-h-[800px] min-h-[450px] flex items-center pb-10 lg:bg-center bg-center">
                <div className="xl:container lg:container mx-auto lg:max-0 px-5">
                <div className="site-banner-content max-w-[582px] rtl:max-w-[725px] ml-0 rtl:text-right"> 
                    <h1 className="xl:text-40 lg:text-[30px] text-[22px] text-info-color font-bold text-left rtl:xl:text-[70px] rtl:leading-[86px] rtl:text-right">{t("benefits")}</h1>
                    <h5 className="xl:text-50 lg:text-[40px] text-[30px] text-white font-bold text-left rtl:text-[80px] rtl: leading-[99px] rtl:text-right xl:leading-[63px] lg:leading-[46px] mb-5">{t("unlock")}</h5>
                    <p className="text-left text-white 2xl:text-2xl lg:text-xl rtl:text-right rtl:max-w-[582px] rtl:2xl:text-[40px] text-xl font-normal leading-[56px]">{t("through_holistic")}</p>
                    <div className="btn-wrap mt-[60px]">
                    <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" target="_blank" className="py-2 lg:px-8 px-3 text-white rounded-3xl font-medium rtl:font-black xl:text-xl rtl:xl:text-[32px] text-[12px] bg-btn-gradient hover:bg-btn-gradient-hover lg:ml-4 rtl:text-[12px]">{t("download_app")}</Link>
                    </div>
                 </div>  
                </div>  
           </section>
        </>
    );
}