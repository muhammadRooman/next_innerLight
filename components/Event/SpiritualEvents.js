import SpiritualCard from '@/components/Event/SpiritualCard'
import { useTranslations } from "next-intl";

export default function SpiritualEvents({webinarEvenData}){
    const t = useTranslations("EventBanner");

    return(
        <>
        <section className=" bg-[#EFEFEF]  relative flex items-center justify-start py-16 ">
            <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5">
                <div className="heading-box text-center xl:mb-11 mb-8">
                    <h5 className="text-info-color 2xl:text-2xl font-black">{t("connect_and_grow")}</h5>
                    <h2 className="xl:text-40 lg:text-[30px] text-[25px]  font-bold">{t("spiritual_events")}</h2>
                </div>
                <SpiritualCard webinarEvenData = {webinarEvenData}/>
            </div>
        </section>
        </>
    )
}