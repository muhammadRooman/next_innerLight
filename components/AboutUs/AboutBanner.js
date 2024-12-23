import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function AboutBanner(){
    const t = useTranslations("AboutBanner");

    return(
        <>
        <section className="site-banner about-banner bg-cover bg-center xl:min-h-[800px] min-h-[450px] relative flex items-center justify-start pb-10 ">
            <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5">
                <div className="inner-container relative">
                    <div className="site-banner-content max-w-[582px] ml-0 rtl:text-right"> 
                        <h5 className="xl:text-40 lg:text-[30px] text-[22px] text-info-color font-bold text-left rtl:xl:text-[70px] rtl:leading-[86px] rtl:text-right">{t("who_we_are")}</h5>  
                        <h5 className="xl:text-50 lg:text-[40px] text-[30px] text-white font-bold text-left rtl:text-[80px] rtl: leading-[99px] rtl:text-right xl:leading-[63px] lg:leading-[46px] mb-4">{t("nurturing")}</h5>  
                        <p className="text-left text-white 2xl:text-2xl rtl:text-[40px] rtl:leading-[40px] rtl:text-right lg:text-xl mt-5">{t("through_holistic")}</p>
                        <div className="btn-wrap mt-12">
                        <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" className="py-2 lg:px-6 px-3 text-white rounded-3xl font-medium rtl:font-black xl:text-xl rtl:xl:text-[32px] text-[12px] bg-btn-gradient hover:bg-btn-gradient-hover lg:ml-4 rtl:text-[12px]">{t("download_app")}</Link>
                        </div>
                    </div>   
                </div>
            </div>
        </section>
        </>
    )
}

 