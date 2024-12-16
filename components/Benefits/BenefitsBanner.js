import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function BenefitsBanner() {
    const t = useTranslations("BenifitsBanner");
    return (
        <>
           <section className="site-banner benefits-banner relative bg-cover xl:min-h-[800px] min-h-[450px] flex items-center pb-10 lg:bg-center bg-center">
                <div className="xl:container lg:container mx-auto lg:max-0 px-5">
                <div className="site-banner-content max-w-[582px] ml-0"> 
                    <h1 className="xl:text-40 lg:text-[30px] text-[22px] text-info-color font-bold text-left">{t("benefits")}</h1>
                    <p className="xl:text-50 lg:text-[40px] text-[30px] text-white font-bold text-left xl:leading-[63px] lg:leading-[46px] mb-4">{t("unlock")}</p>
                    <p className="text-left text-white 2xl:text-2xl lg:text-xl">{t("through_holistic")}</p>
                    <div className="btn-wrap mt-10">
                    <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" target="_blank" className="py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover lg:mr-8 lg:text-lg "  >{t("download_app")}</Link>
                    </div>
                 </div>  
                </div>  
           </section>
        </>
    );
}