import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function OurMission(){
    const t = useTranslations("AboutBanner");


    return(
        <>
        <section className="xl:pt-[132px]  pt-[50px] xl:pb-[94px] pb-[50px] bg-gray-light">
            <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5">
              
                <div className="md:grid md:grid-cols-12 aboutUs  gap-6 "> 
                    <div  className="col-span-8">
                        <div className="heading-box text-left rtl:text-right mb-5">
                            <h5 className="text-info-color 2xl:text-2xl font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px]">{t("about_us")}</h5>
                            <h2 className="xl:text-40 lg:text-[30px] text-[24px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px]">{t("transforming")}</h2>
                        </div>
                        <div className="WelcomeMessage xl:pl-19 lg:pl-16 pl-5 lg:pr-7 p-5 xl:py-7 border-solid border-2 border-[#B8E7FF] rounded-[20px] mb-5">
                          <h5 className="xl:text-32 text-[25px] font-bold pb-2.5">{t("welcome_ceo")}</h5>
                          <p className='text-lg xl:text-2xl font-normal mb-4 text-[#343434] max-w-[940px]'>{t("experience_personalized")}</p>
                          <p className="text-[#343434] py-5 text-[44px] font-brittany">Issam Radha</p>
                        </div>
                        <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold pb-7">{t("our_mission")}</h2>
                        <p className='text-lg font-normal mb-5 text-[#343434]'>{t("we_believe_that_true")}</p>
                        <p className='text-lg font-bold mb-5 text-[#343434]'>{t("through_our_teachings")}</p> 
                        <p className='text-lg font-normal mb-4 text-[#343434]'>{t("we_are_committed")}</p>  
                    </div>
                    <div  className="col-span-4">
                        <div className='relative xl:max-w-[371px] max-w-full min-h-[469px] shadow-shadow-color bg-white p-2 mx-auto rounded-10 my-7'>
                            <Image src="/assets/images/about/owner.png" alt="logo white" layout="fill"  className="rounded-30 object-cover p-2" />
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}