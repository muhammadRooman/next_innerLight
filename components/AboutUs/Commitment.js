import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function Commitment(){
  const t = useTranslations("AboutBanner");


    return(
        <>
        <section className="our-value xl:pt-[132px]  pt-[70px] xl:pb-[94px] pb-[70px] bg-gray-light">
                <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5"> 
                    <div className="lg:grid lg:grid-cols-12  gap-6"> 
                        <div  className="col-span-7 our-value-inner">
                            <div className="our-value-content-box">
                            <div className="heading-box text-left xl:mb-11 mb-8 rtl:text-right">
                                <h5 className="text-info-color 2xl:text-2xl font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px]">{t("our_values")}</h5>
                                <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px]">{t("commitment_to_your_spiritual_growth")}</h2>
                            </div> 
                            <p className="text-lg xl:mb-7 mb-5"><span className="text-info-color 2xl:text-2xl font-bold rtl:block">{t("holistic_healing")}:</span> {t("we_honor_the_interconnectedness")}</p>
                            <p className="text-lg xl:mb-7 mb-5"><span className="text-info-color 2xl:text-2xl font-bold rtl:block">{t("empathy_&_compassion")}:</span>  {t("we_listen_with_open")}</p>
                            <p className="text-lg xl:mb-7 mb-5"><span className="text-info-color 2xl:text-2xl font-bold rtl:block"> {t("growth_impowerment")}:</span> {t("we_listen_with_open")}</p>
                            <p className="text-lg xl:mb-5 mb-12"><span className="text-info-color 2xl:text-2xl font-bold rtl:block"> {t("mindfulness_&_presence")} :</span> {t("we_listen_with_open")}</p>
                            </div>
                            <div className="nurturing-img relative min-h-[384px]">
                                <Image src="/assets/images/about/Commitment.png" alt="Commitment" layout="fill"  className=" object-cover  " />
                            </div> 
                        </div>
                        <div  className="col-span-5">
                            <div className="nurturing-img relative lg:min-h-[752px] min-h-[500px] max-w-[634px]">
                                <Image src="/assets/images/about/nurturing.png" alt="logo white" layout="fill"  className=" object-cover xl:p-2.5" />
                            </div>
                            <p  className="2xl:text-2xl text-[#753892] my-5" >{t("connect_with_compassionate")}</p>
                            <div className='btn-download flex'>
                                    <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" target="_blank" className="mr-3"><Image src="/AppStore.png" width={180} height={55} alt="AppStore" className=''/></Link> 
                                    <Link href="https://apps.apple.com/au/app/innerlight-academy/id6670317150" target="_blank" className="rtl:mr-5 block"><Image src="/GooglePlay.png" width={180} height={55} alt="AppStore" className=''/></Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}