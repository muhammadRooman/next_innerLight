import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function ContactUs() {
  const t = useTranslations("ContactUs");

    return (
        <>
            <section className="site-banner contact-banner relative xl:min-h-[800px] min-h-[450px] bg-cover flex items-center pb-10 lg:bg-center">
                <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5">
                <div className="site-banner-content max-w-[590px] ml-0"> 
                        <h5 className="xl:text-40 lg:text-[30px] text-[22px] text-info-color font-bold text-left ">{t("contact_us")}</h5>  
                        <h5 className="xl:text-50 lg:text-[40px] text-[30px] text-white font-bold text-left xl:leading-[63px] lg:leading-[46px] mb-4">{t("get_in_touch")}</h5>  
                        <p className="text-left text-white 2xl:text-2xl lg:text-xl">{t("through_holistic_practices")}</p>
                        <div className="btn-wrap mt-10">
                        <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" target="_blank" className="py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover lg:mr-8 lg:text-lg">{t("download_app")}</Link>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    );
}