
 
import Image from 'next/image';
import Link from "next/link"; 

export default function Commitment() { 

    return (
        <>
           <section className="commitment-wrap bg-gray-light lg:pt-[132px] lg:pb-[107px] pt-[60px] pb-[60px]">
                <div className="2xl:container xl:container lg:container mx-auto px-5">
                   <div className='heading-box text-center lg:mb-24 mb-7'>
                      <h5 className='text-info-color 2xl:text-2xl font-black  '>INNER LIGHT</h5>
                      <h2 className='xl:text-40 lg:text-[30px]  text-[25px]  font-bold'>Commitment To Your Spiritual Growth</h2>
                   </div>
                   <div class="lg:grid lg:grid-cols-4  items-center ">
                        <div className=' col-span-1  '>
                            <div className='commitment-content text-center lg:mb-36 mb-4 lg:max-w-[395px] max-w-full'>
                               <p className='xl:text-lg font-normal'>We are dedicated to guiding individuals toward inner peace, wellness, and spiritual growth through holistic practices.</p>
                            </div>
                            <div className='commitment-content text-center lg:mb-36 mb-4 lg:max-w-[395px] max-w-full'>
                               <p className='xl:text-lg font-normal'>Our academy blends meditation, healing, and self-care practices to nurture balance in body, mind, and spirit.</p>
                            </div>
                            <div className='commitment-content text-center lg:max-w-[395px] max-w-full mb-4'>
                               <p className='xl:text-lg font-normal'>Our skilled healers and teachers bring years of expertise, offering guidance in modalities such as Reiki, sound healing, and more.</p>
                            </div>
                        </div> 
                        <div className='col-span-2  '>
                            <div className='relative xl:max-w-[566px] lg:max-w-[440px] max-w-full lg:min-h-[615px] min-h-[515px] shadow-shadow-color bg-white p-2.5 mx-auto rounded-10 my-7'>
                                <Image src="/CommitmentImg.png" alt="logo white" layout="fill"  className="rounded-30 object-cover p-2.5" />
                            </div> 
                        </div>
                       <div className=' col-span-1 '>
                            <div className='commitment-content text-center lg:mb-36 lg:max-w-[395px] max-w-full mb-4'>
                                <p className='xl:text-lg font-normal'>We believe in the power of tailored support, meeting each person where they are on their unique journey.</p>
                            </div>
                            <div className='commitment-content text-center lg:mb-36 lg:max-w-[395px] max-w-full mb-4'>
                                <p className='xl:text-lg font-normal'>We foster a welcoming environment where individuals can connect, learn, and grow together in a supportive space.</p>
                            </div>
                            <div className='commitment-content text-center lg:max-w-[395px] max-w-full mb-4'>
                                <p className='xl:text-lg font-normal'>Our academy offers tools and guidance to create lasting change, empowering you to live with greater clarity, peace, and purpose.</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    )
}

