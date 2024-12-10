
 
import Image from 'next/image';
import Link from "next/link"; 

export default function MeditationConsultation() { 

    return (
        <>
           <section className="MeditationConsultation-wrap "> 
               <div className='MeditationConsultation-innner flex lg:min-h-[997px]  min-h-[860px]'>
                    <div className='Meditation-left-img bg-meditation-left w-full bg-cover lg:max-w-[calc(100%-70%)] max-w-full min-h-full lg:block hidden'></div>
                    <div className='Meditation-content bg-meditation-bg w-full bg-cover pt-12 lg:pl-16 2xl:pr-[200px] xl:pr-[140px] lg:pr-[45px] px-4 lg:max-w-[calc(100%-30%)] max-w-full min-h-full'>
                      <div className='Meditation-content-inner  pb-8'>
                      <div className='max-w-[887px]'>
                      <div className='heading-box xl:mb-9 mb-4'>
                            <h5 className='text-info-color 2xl:text-2xl font-black'>INNER LIGHT</h5>
                            <h2 className='xl:text-40 lg:text-[30px]  text-[25px]  font-bold'>Meditation & Consultation</h2>
                        </div>
                        <p className='text-lg xl:text-2xl font-normal mb-4'>Experience personalized support on your spiritual journey through tailored meditation sessions and one-on-one consultations with skilled practitioners. Whether you're new to meditation or looking to deepen your practice, our consultations provide guidance, clarity, and tools to help you overcome challenges and find inner peace. Connect with compassionate experts dedicated to nurturing your growth and well-being.</p>
                        <p className='text-lg xl:text-2xl font-bold text-[#753892]'>Connect with compassionate experts dedicated to nurturing your growth and well-being.</p>
                      </div>
                          <div className='static-img relative lg:left-[-166px] mt-8 lg:w-[calc(100%+166px)] w-full '>
                            <div class="md:grid md:grid-cols-3 items-center">
                                <div className='col-span-1  '> 
                                    <div className='static-img-wrap relative  min-h-[380px] rounded-10 overflow-hidden'>
                                       <Image src="/MmeditationImg1.png" alt="logo white" layout="fill"  className="rounded-30 object-cover p-2.5" />
                                    </div>
                                </div> 
                                <div className='col-span-1  '> 
                                    <div className='static-img-wrap relative  min-h-[380px] rounded-10 overflow-hidden'>
                                       <Image src="/MmeditationImg2.png" alt="logo white" layout="fill"  className="rounded-30 object-cover p-2.5" />
                                    </div>
                                </div>
                                <div className=' col-span-1  '> 
                                    <div className='static-img-wrap relative  min-h-[380px] rounded-10 overflow-hidden'>
                                       <Image src="/MmeditationImg3.png" alt="logo white" layout="fill"  className="rounded-30 object-cover p-2.5" />
                                    </div>
                                </div> 
                            </div>
                        </div>  
                        <div className='book-you-button sm:flex sm:justify-between items-center mt-8 justify-center text-center  '>
                           <h5 className='text-black xl:text-40 lg:text-[30px]  text-[25px]  font-bold mb-3'>Book Your Consultation</h5> 
                           <Link href="#" className="py-2 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover xl:mr-0 lg:w-[181px]   lg:text-lg block">Contact Us</Link>
                        </div>
                      </div>
                    </div>
                </div>       
            </section>
        </>
    )
}

