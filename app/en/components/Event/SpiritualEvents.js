import Image from "next/image";
import Link from "next/link";
import SpiritualCard from '@/app/en/components/Event/SpiritualCard'

export default function SpiritualEvents(){

    return(
        <>
        <section className=" bg-[#EFEFEF]  relative flex items-center justify-start py-16 ">
            <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5">
                <div className="heading-box text-center xl:mb-11 mb-8">
                    <h5 className="text-info-color 2xl:text-2xl font-black">CONNECT AND GROW</h5>
                    <h2 className="xl:text-40 lg:text-[30px] text-[25px]  font-bold">Spiritual Events</h2>
                </div> 
                <SpiritualCard /> 
            </div>
        </section>
        </>
    )
}