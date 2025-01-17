import SpiritualCard from '@/components/Event/SpiritualCard'
import { useTranslations } from "next-intl";

export default function SpiritualEvents({webinarEvenData}){
    const t = useTranslations("EventBanner");

    return(
        <>
        <section className=" bg-[#EFEFEF]  relative flex items-center justify-start py-16 ">
            <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5">
                <div className="heading-box text-center xl:mb-11 mb-8">
                    <h5 className="text-info-color 2xl:text-2xl 2xl:leading-[69px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px]">{t("connect_and_grow")}</h5>
                    <h2 className="xl:text-[40px] lg:text-[30px] 2xl:leading-[88px] text-[25px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px]">{t("spiritual_events")}</h2>
                </div>
                <SpiritualCard webinarEvenData = {webinarEvenData}/>
            </div>
        </section>
        </>
    )
}