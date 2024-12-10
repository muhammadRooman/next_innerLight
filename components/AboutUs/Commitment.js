import Image from "next/image";
import Link from "next/link";

export default function Commitment(){

    return(
        <>
        <section className="our-value xl:pt-[132px]  pt-[70px] xl:pb-[94px] pb-[70px] bg-gray-light">
                <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5"> 
                    <div className="lg:grid lg:grid-cols-12  gap-6"> 
                        <div  className="col-span-7 our-value-inner">
                            <div className="our-value-content-box">
                            <div className="heading-box text-left xl:mb-11 mb-8">
                                <h5 className="text-info-color 2xl:text-2xl font-black">OUR VALUES</h5>
                                <h2 className="xl:text-40 lg:text-[30px] text-[25px]  font-bold">Commitment To Your Spiritual Growth</h2>
                            </div> 
                            <p className="text-lg xl:mb-7 mb-5"><span className="text-info-color 2xl:text-2xl font-bold">Holistic Healing:</span> We honor the interconnectedness of mind, body, and spirit, believing that true health is achieved through balance and nurturing each aspect of your being.</p>
                            <p className="text-lg xl:mb-7 mb-5"><span className="text-info-color 2xl:text-2xl font-bold">Empathy & Compassion:</span>  We listen with open hearts, offering support without judgment, and treating each individual with kindness and respect.</p>
                            <p className="text-lg xl:mb-7 mb-5"><span className="text-info-color 2xl:text-2xl font-bold"> Growth & Empowerment:</span>  We listen with open hearts, offering support without judgment, and treating each individual with kindness and respect.</p>
                            <p className="text-lg xl:mb-16 mb-12"><span className="text-info-color 2xl:text-2xl font-bold">  Mindfulness & Presence :</span>  We listen with open hearts, offering support without judgment, and treating each individual with kindness and respect.</p>
                            </div>
                            <div className="nurturing-img relative min-h-[384px]">
                                <Image src="/assets/images/about/Commitment.png" alt="Commitment" layout="fill"  className=" object-cover  " />
                            </div> 
                        </div>
                        <div  className="col-span-5">
                            <div className="nurturing-img relative lg:min-h-[752px] min-h-[500px] max-w-[634px]">
                                <Image src="/assets/images/about/nurturing.png" alt="logo white" layout="fill"  className=" object-cover xl:p-2.5" />
                            </div>
                            <p  className="2xl:text-2xl text-[#753892] my-5" >Connect with compassionate experts dedicated to nurturing your growth and well-being.</p>
                            <div className='btn-download flex'>
                                    <Link href="#" className="mr-3"><Image src="/AppStore.png" width={180} height={55} alt="AppStore" className=''/></Link> 
                                    <Link href="#" className=" block"><Image src="/GooglePlay.png" width={180} height={55} alt="AppStore" className=''/></Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}