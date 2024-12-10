import Image from "next/image";
import Link from "next/link";

export default function AboutBanner(){

    return(
        <>
        <section className="hero-banner bg-about-banner bg-cover bg-center  xl:min-h-[800px]  min-h-[450px]  relative flex items-center justify-start pb-10 ">
            <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5">
                <div className="inner-container relative">
                    <div className="hero-banner-content max-w-[582px] ml-0"> 
                        <h5 className="xl:text-40 lg:text-[30px] text-[22px] text-info-color font-bold text-left ">WHO WE ARE:</h5>  
                        <h5 className="xl:text-50 lg:text-[40px] text-[30px] text-white font-bold text-left xl:leading-[63px] lg:leading-[46px] mb-4">Nurturing Your Mind, Body, And Spirit</h5>  
                        <p className="text-left text-white 2xl:text-2xl lg:text-xl  ">Through holistic practices, personalized support, and a compassionate community, we help you cultivate inner peace, clarity, and a deeper connection with your true self.</p>
                        <div className="btn-wrap mt-10">
                           <Link href="#" className="py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover lg:mr-8 lg:text-lg "  >Download App</Link>
                        </div>
                    </div>   
                </div>
            </div>
        </section>
        </>
    )
}

 