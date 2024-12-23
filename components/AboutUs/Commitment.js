import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function Commitment(){
  const t = useTranslations("AboutBanner");


    return(
        <>
        <section className="our-value xl:pt:[132px] rtl:pt:[60px] pt-[70px] xl:pb-[94px] pb-[70px] bg-gray-light">
                <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5"> 
                    <div className="lg:grid lg:grid-cols-12  gap-6"> 
                        <div  className="col-span-7 our-value-inner">
                            <div className="our-value-content-box">
                            <div className="heading-box text-left xl:mb-11 mb-8 rtl:text-right">
                                <h5 className="text-info-color 2xl:text-2xl 2xl:leading-[69px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px]">{t("our_values")}</h5>
                                <h2 className="xl:text-[40px] lg:text-[30px] 2xl:leading-[88px] text-[25px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px]">{t("commitment_to_your_spiritual_growth")}</h2>
                            </div> 
                            <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:max-w-[680px] rtl:leading-8 mb-4"><span className="text-info-color 2xl:text-2xl rtl:2xl:text-[40px] text-xl font-bold rtl:text-right rtl:block mb-3">{t("holistic_healing")}</span> {t("we_honor_the_interconnectedness")}</p>
                            <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:max-w-[680px] rtl:leading-8 mb-4"><span className="text-info-color 2xl:text-2xl rtl:2xl:text-[40px] text-xl font-bold rtl:text-right mb-3 rtl:block">{t("empathy_&_compassion")}</span>  {t("we_listen_with_open")}</p>
                            <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:max-w-[680px] rtl:leading-8 mb-4"><span className="text-info-color 2xl:text-2xl rtl:2xl:text-[40px] text-xl font-bold rtl:text-right mb-3 rtl:block"> {t("growth_impowerment")}</span> {t("we_listen_with_open")}</p>
                            <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:max-w-[680px] rtl:leading-8 mb-4"><span className="text-info-color 2xl:text-2xl rtl:2xl:text-[40px] text-xl font-bold rtl:text-right mb-3 rtl:block"> {t("mindfulness_&_presence")}</span> {t("we_listen_with_open")}</p>
                            </div>
                            <div className="nurturing-img relative min-h-[384px]">
                                <Image src="/assets/images/about/Commitment.png" alt="Commitment" layout="fill"  className=" object-cover  " />
                            </div> 
                        </div>
                        <div  className="col-span-5">
                            <div className="nurturing-img relative lg:min-h-[722px] min-h-[500px] max-w-[634px] mt-20">
                                <Image src="/assets/images/about/nurturing.png" alt="logo white" layout="fill"  className=" object-cover xl:p-2.5" />
                            </div>
                            <p  className="2xl:text-2xl rtl:2xl:text-[40px] max-w-[600px] rtl:leading-[36px] font-semibold md:text-[18px] text-[16px] text-[#753892] my-5" >{t("connect_with_compassionate")}</p>
                            <div className='btn-download flex'>
                                    <Link href="https://apps.apple.com/au/app/innerlight-academy/id6670317150 " target="_blank" className="mr-3"><Image src="/AppStore.png" width={180} height={55} alt="AppStore" className=''/></Link> 
                                    <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" target="_blank" className="rtl:mr-5 block"><Image src="/GooglePlay.png" width={180} height={55} alt="AppStore" className=''/></Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}