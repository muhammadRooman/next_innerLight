import Image from "next/image";
import Link from "next/link";

export default function OurMission(){

    return(
        <>
        <section className="xl:pt-[132px]  pt-[50px] xl:pb-[94px] pb-[50px] bg-gray-light">
            <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5">
              
                <div className="md:grid md:grid-cols-12 aboutUs  gap-6 "> 
                    <div  className="col-span-8">
                        <div className="heading-box text-left mb-5">
                            <h5 className="text-info-color 2xl:text-2xl font-black">ABOUT US</h5>
                            <h2 className="xl:text-40 lg:text-[30px] text-[24px]  font-bold">Transforming Lives Through Care</h2>
                        </div>
                        <div className="WelcomeMessage xl:pl-18 lg:pl-12 pl-5 lg:pr-7 p-5 xl:py-7   border-solid border-2 border-[#B8E7FF] rounded-[20px] mb-5">
                          <h5 className="xl:text-32 text-[25px] font-bold pb-2.5">Welcome Message From Our CEO</h5>
                          <p className='text-lg xl:text-2xl font-normal mb-4 text-[#343434] max-w-[940px]'>Experience personalized support on your spiritual journey through tailored meditation sessions and one-on-one consultations with skilled practitioners.</p>
                        </div>
                        <h2 className="xl:text-40 lg:text-[30px]  text-[25px]  font-bold">Our Mission</h2>
                        <p className='text-lg font-normal mb-4 text-[#343434]'>We believe that true health goes beyond the physical body — it encompasses the mind, soul, and spirit. Our mission is to empower individuals to embrace a holistic approach to health, one that nurtures every aspect of their being. By providing insightful resources, practical tools, and spiritual guidance, we aim to inspire growth, healing, and transformation on your personal spiritual path.</p>
                        <p className='text-lg font-bold mb-4 text-[#343434]'>Through our teachings, courses, and articles, we strive to create a global community that fosters spiritual well-being, encourages self-awareness, and nurtures personal growth. </p> 
                        <p className='text-lg font-normal mb-4 text-[#343434]'> We are committed to promoting peace, mindfulness, and a deeper sense of fulfillment in all who seek it. </p>  
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